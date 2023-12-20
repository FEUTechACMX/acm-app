import serverWrapper from "@/components/wrapper/serverWrapper";
import { getUniversityName } from "@/utils/universityName";
import AdmZip from "adm-zip";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";
import { PDFDocument } from "pdf-lib";
import undertakingCredits from "./credits";
import undertakingEmbedImage from "./image";
import undertakingImgType from "./validImage";
export interface UndertakingBody {
	fullName: string;
	idImg: File | FileList;
	signatureImg: File | FileList;
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

const source = join(
	process.cwd(),
	"public",
	"data",
	"CONFIDENTIALITY-UNDERTAKING-original.pdf",
);

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

type UndertakingBodyWithoutIdSigCourseFormat = Omit<
	UndertakingBody,
	"idImg" | "signatureImg" | "courses" | "enrollmentFormat"
>;

const headers = new Headers({
	"Cache-Control": "no-store",
	"Content-Disposition": "attachment; filename=CONFIDENTIALITY-UNDERTAKING.zip",
	"Content-Type": "application/zip",
});
function setDimWithAspectRatio(_width: number, _height: number, maxDims: dim) {
	const aspectRatio = _width / _height;
	let width = maxDims.width;
	let height = maxDims.width / aspectRatio;

	if (height > maxDims.height) {
		height = maxDims.height;
		width = maxDims.height * aspectRatio;
	}
	return {
		width,
		height,
	};
}
const createTemplate = async (
	signatureBytes: Buffer,
	idBytes: Buffer,
	imgTypes: ImgTypes,
	rest: UndertakingBodyWithoutIdSigCourseFormat,
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
	console.log("Request received");
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
	const coursesArray = JSON.parse(courses as any);

	if (Array.isArray(idImg) || Array.isArray(signatureImg)) {
		throw new Error("Invalid image type");
	}
	const idF = idImg as File;
	const signatureF = signatureImg as File;
	if (idF.size > MAX_FILE_SIZE || signatureF.size > MAX_FILE_SIZE) {
		throw new Error("Image too large");
	}
	const [signature, id] = await Promise.all([
		signatureF.arrayBuffer(),
		idF.arrayBuffer(),
	]);
	const idImgType = undertakingImgType(idF.type);
	const signatureImgType = undertakingImgType(signatureF.type);
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
	// get key from value
	const [uniId, uniName] = getUniversityName(enrollmentFormat);
	const title = fontSize.get(uniId);
	const promises = coursesArray.map(async (course: string) => {
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
	});
	await Promise.allSettled(promises);
	zip.addFile("README.md", Buffer.from(undertakingCredits));
	console.log("PDFs generated successfully");
	return new NextResponse(zip.toBuffer(), {
		status: 200,
		headers,
	});
});

export { POST };
