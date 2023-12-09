import serverWrapper from "@/components/wrapper/serverWrapper";
import AdmZip from "adm-zip";
import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

interface Body {
	name: string;
	signature: string;
	studentNumber: string;
	yearLvl: string;
	program: string;
	courseCodes: string[];
}

const uniName = "FEU Institute of Technology";
const zip = new AdmZip();

const dataPath = "public/data";
const source = `${dataPath}/CONFIDENTIALITY-UNDERTAKING-template.pdf`;
const target = `${dataPath}/ACMX-Undertaking.zip`;
const signaturePath = `${dataPath}/test.png`;
const idPath = `${dataPath}/alpha_id.jpg`;
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

const createTemplate = async (signatureBytes: Buffer, idBytes: Buffer) => {
	const templatePdf = await PDFDocument.load(await readFile(source));
	const idImgPromise = templatePdf.embedJpg(idBytes);
	const sigImgPromise = templatePdf.embedPng(signatureBytes);
	const [idImg, sigImg] = await Promise.all([idImgPromise, sigImgPromise]);
	const aspectRatio = sigImg.width / sigImg.height;
	let sigWidth = sigMaxWidth;
	let sigHeight = sigMaxWidth / aspectRatio;

	if (sigHeight > sigMaxHeight) {
		sigHeight = sigMaxHeight;
		sigWidth = sigMaxHeight * aspectRatio;
	}

	templatePdf.getPage(0).drawImage(sigImg, {
		x: 400,
		y: 145,
		width: sigWidth,
		height: sigHeight,
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

const generatePDF = serverWrapper(async (req) => {
	const body: Body = await req.json();
	const { name, studentNumber, yearLvl, program, courseCodes } = body;

	const signatureBytesPromise = readFile(signaturePath);
	const idBytesPromise = readFile(idPath);
	const [signature, id] = await Promise.all([
		signatureBytesPromise,
		idBytesPromise,
	]);
	const templatePdfBytes = await createTemplate(signature, id);
	const date = new Date().toLocaleDateString("en-PH");

	const promises = courseCodes.map(async (course) => {
		const pdfDoc = await PDFDocument.load(templatePdfBytes);
		const firstPage = pdfDoc.getPage(0);
		firstPage.drawText(`${uniName} - ${course}`, {
			x: 244,
			y: 694,
			size: title,
		});

		firstPage.drawText(date, {
			x: 400,
			y: 96,
			size: reg,
		});

		firstPage.drawText(name, {
			x: 400,
			y: 136,
			size: reg,
		});

		firstPage.drawText(`${yearLvl} / ${program}`, {
			x: 400,
			y: 122,
			size: reg,
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

	// Note: return to client and not write to disk
	await writeFile(target, zip.toBuffer());
	console.log("PDFs generated, zipped and saved to disk");

	return NextResponse.json({
		message: "PDFs generated, zipped and saved to disk",
	});
});

export { generatePDF as POST };
