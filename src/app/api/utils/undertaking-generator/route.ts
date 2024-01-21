import serverWrapper from "@/components/wrapper/serverWrapper";
import { getUniversityName } from "@/utils/universityName";
import AdmZip from "adm-zip";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import undertakingCredits from "./credits";
import undertakingEmbedImage from "./image";
import undertakingImgType from "./validImage";

export interface UndertakingBody {
	fullName: string;
	idImg: File;
	signatureImg: File;
	enrollmentFormat: string;
	studentNumber: string;
	year: string;
	program: string;
	courses: string[];
}
interface ImgTypes {
	idImgType: number;
	signatureImgType: number;
}

const source =
	process.cwd() + "/public/data/CONFIDENTIALITY-UNDERTAKING-original.pdf";

const reg = 10;
const fontSize = new Map([
	["1", 12],
	["2", 7.8],
]);

interface dim {
	width: number;
	height: number;
}

const _maxDims: Record<string, dim> = {
	sig: {
		width: 100,
		height: 50,
	},
	id: {
		width: 150,
		height: 150,
	},
};
const { sig: sigMaxDims, id: idMaxDims } = _maxDims;

type UndertakingBodyPartial = Omit<
	UndertakingBody,
	"idImg" | "signatureImg" | "courses" | "enrollmentFormat"
>;

const headers = new Headers({
	"Cache-Control": "no-store",
	"Content-Disposition": "attachment; filename=CONFIDENTIALITY-UNDERTAKING.zip",
	"Content-Type": "application/zip",
});
function setDimWithAspectRatio(width: number, height: number, maxDims: dim) {
	const aspectRatio = width / height;
	let w = maxDims.width;
	let h = maxDims.width / aspectRatio;

	if (h > maxDims.height) {
		h = maxDims.height;
		w = maxDims.height * aspectRatio;
	}
	return {
		width: w,
		height: h,
	};
}
const createTemplate = async (
	signatureBytes: Buffer,
	idBytes: Buffer,
	imgTypes: ImgTypes,
	rest: UndertakingBodyPartial,
) => {
	const { fullName, year, program, studentNumber } = rest;
	const templatePdf = await PDFDocument.load(await readFile(source));
	const { idImgType, signatureImgType } = imgTypes;
	const idImgPromise = undertakingEmbedImage(idBytes, idImgType, templatePdf);
	const sigImgPromise = undertakingEmbedImage(
		signatureBytes,
		signatureImgType,
		templatePdf,
	);

	const [idImg, sigImg] = await Promise.all([idImgPromise, sigImgPromise]);
	const { width: sigWidth, height: sigHeight } = setDimWithAspectRatio(
		sigImg.width,
		sigImg.height,
		sigMaxDims,
	);

	const firstPage = templatePdf.getPage(0);
	firstPage.drawImage(sigImg, {
		x: 400,
		y: 145,
		width: sigWidth,
		height: sigHeight,
	});

	const date = new Date().toLocaleDateString("en-PH");
	firstPage.drawText(date, {
		x: 400,
		y: 96,
		size: reg,
	});

	firstPage.drawText(fullName, {
		x: 400,
		y: 136,
		size: reg,
	});

	firstPage.drawText(studentNumber, {
		x: 400,
		y: 110,
		size: reg,
	});

	firstPage.drawText(`${year} / ${program}`, {
		x: 400,
		y: 122,
		size: reg,
	});

	const { width: idImgWidth, height: idImgHeight } = setDimWithAspectRatio(
		idImg.width,
		idImg.height,
		idMaxDims,
	);

	firstPage.drawImage(idImg, {
		x: 100,
		y: 10,
		width: idImgWidth,
		height: idImgHeight,
	});

	return templatePdf.save();
};
const MAX_FILE_SIZE = 3_000_000;
const POST = serverWrapper(async (req) => {
	const formData = await req.formData();
	const body = Object.fromEntries(
		formData.entries(),
	) as unknown as UndertakingBody;
	const {
		fullName,
		studentNumber,
		year,
		program,
		courses,
		idImg,
		signatureImg,
		enrollmentFormat,
	} = body;
	const coursesArray: string[] = JSON.parse(`${courses}`);
	if (coursesArray.length > 10)
		throw new Error("Too many courses selected (max 10)");
	if (idImg.size > MAX_FILE_SIZE || signatureImg.size > MAX_FILE_SIZE)
		throw new Error(
			"Images must be < 3MB. If issues persist, change image to upload",
		);
	const [signature, id] = await Promise.all([
		signatureImg.arrayBuffer(),
		idImg.arrayBuffer(),
	]);
	const idImgType = undertakingImgType(idImg.type);
	const signatureImgType = undertakingImgType(signatureImg.type);
	console.log("Generating PDFs...");
	const templatePdfBytes = await createTemplate(
		Buffer.from(signature),
		Buffer.from(id),
		{
			idImgType,
			signatureImgType,
		},
		{
			fullName,
			year,
			program,
			studentNumber,
		},
	);
	const zip = new AdmZip();
	const [uniId, uniName] = getUniversityName(enrollmentFormat);
	const title = fontSize.get(uniId);
	for await (const course of coursesArray) {
		const pdfDoc = await PDFDocument.load(templatePdfBytes);
		const firstPage = pdfDoc.getPage(0);
		firstPage.drawText(`${uniName} - ${course}`, {
			x: 244,
			y: 694,
			size: title,
		});
		const coursePdfBytes = await pdfDoc.save();
		zip.addFile(
			`${course}-CONFIDENTIALITY-UNDERTAKING.pdf`,
			Buffer.from(coursePdfBytes),
		);
	}
	zip.addFile("README.md", Buffer.from(undertakingCredits));
	console.log("PDFs generated successfully");
	return new NextResponse(zip.toBuffer(), {
		status: 200,
		headers,
	});
});

export { POST };
