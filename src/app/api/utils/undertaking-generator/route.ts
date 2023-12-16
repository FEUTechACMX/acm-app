import serverWrapper from "@/components/wrapper/serverWrapper";
import AdmZip from "adm-zip";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import undertakingCredits from "./credits";
import undertakingEmbedImage from "./image";
import undertakingImgType from "./validImage";
export interface UndertakingBody {
	fullName: string;
	idImg: File | FileList;
	signatureImg: File | FileList;
	studentNumber: string;
	year: string;
	program: string;
	courses: string[];
}
interface ImgTypes {
	idImgType: number;
	signatureImgType: number;
}

const uniName = "FEU Institute of Technology";
const zip = new AdmZip();

const dataPath = "public/data";
const source = `${dataPath}/CONFIDENTIALITY-UNDERTAKING-template.pdf`;
const pageDims = {
	pageWidth: 612,
	pageHeight: 792,
};
const fontSize = {
	title: 7.8,
	reg: 10,
};
const sigMaxDims = {
	sigMaxWidth: 100,
	sigMaxHeight: 50,
};
const { title, reg } = fontSize;
const { pageWidth, pageHeight } = pageDims;
const { sigMaxWidth, sigMaxHeight } = sigMaxDims;

type UndertakingBodyWithoutIdSigCourse = Omit<
	UndertakingBody,
	"idImg" | "signatureImg" | "courses"
>;

const headers = new Headers({
	"Cache-Control": "no-store",
	"Content-Disposition": "attachment; filename=CONFIDENTIALITY-UNDERTAKING.zip",
	"Content-Type": "application/zip",
});

const createTemplate = async (
	signatureBytes: Buffer,
	idBytes: Buffer,
	imgTypes: ImgTypes,
	rest: UndertakingBodyWithoutIdSigCourse,
) => {
	const { fullName, year, program } = rest;
	const templatePdf = await PDFDocument.load(await readFile(source));
	const { idImgType, signatureImgType } = imgTypes;
	const idImgPromise = undertakingEmbedImage(idBytes, idImgType, templatePdf);
	const sigImgPromise = undertakingEmbedImage(
		signatureBytes,
		signatureImgType,
		templatePdf,
	);

	const [idImg, sigImg] = await Promise.all([idImgPromise, sigImgPromise]);
	const aspectRatio = sigImg.width / sigImg.height;
	let sigWidth = sigMaxWidth;
	let sigHeight = sigMaxWidth / aspectRatio;

	if (sigHeight > sigMaxHeight) {
		sigHeight = sigMaxHeight;
		sigWidth = sigMaxHeight * aspectRatio;
	}

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

	firstPage.drawText(`${year} / ${program}`, {
		x: 400,
		y: 122,
		size: reg,
	});

	const { width: idWidth, height: idHeight } = idImg.scale(0.25);
	templatePdf.getPage(1).drawImage(idImg, {
		x: pageWidth / 2 - idWidth / 2,
		y: pageHeight / 2 - idHeight / 2,
		width: idWidth,
		height: idHeight,
	});

	return templatePdf.save();
};

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
	} = body;
	const coursesArray = JSON.parse(courses as any);

	if (Array.isArray(idImg) || Array.isArray(signatureImg)) {
		throw new Error("Invalid image type");
	}
	const idF = idImg as File;
	const signatureF = signatureImg as File;
	const [signature, id] = await Promise.all([
		idF.arrayBuffer(),
		signatureF.arrayBuffer(),
	]);
	const idBytes = Buffer.from(id);
	const signatureBytes = Buffer.from(signature);
	const idType = undertakingImgType(idF.type) as number;
	const sigType = undertakingImgType(signatureF.type) as number;
	console.log("Generating PDFs...");
	const templatePdfBytes = await createTemplate(
		signatureBytes,
		idBytes,
		{
			idImgType: idType,
			signatureImgType: sigType,
		},
		{
			fullName,
			year,
			program,
			studentNumber,
		},
	);

	const promises = coursesArray.map(async (course: string) => {
		const pdfDoc = await PDFDocument.load(templatePdfBytes);
		const firstPage = pdfDoc.getPage(0);
		firstPage.drawText(`${uniName} - ${course}`, {
			x: 244,
			y: 694,
			size: title,
		});

		firstPage.drawText(studentNumber, {
			x: 400,
			y: 110,
			size: reg,
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
