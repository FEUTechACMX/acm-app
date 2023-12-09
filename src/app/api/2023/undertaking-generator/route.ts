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
const signaturePath = `${dataPath}/alpha_signature.png`;
const idPath = `${dataPath}/alpha_id.jpg`;
const pageDims = {
	width: 612,
	height: 792,
};
const fontSize = {
	title: 7.8,
	reg: 10,
};
const { title, reg } = fontSize;
const { width, height } = pageDims;

const createTemplate = async (signatureBytes: Buffer, idBytes: Buffer) => {
	const templatePdf = await PDFDocument.load(await readFile(source));
	const idImage = templatePdf.embedJpg(idBytes);
	const sigImage = templatePdf.embedPng(signatureBytes);

	const [idImagePage] = await Promise.all([idImage, sigImage]);

	const secondPage = templatePdf.getPage(1);
	const { width: sigWidth, height: sigHeight } = idImagePage.scale(0.25);
	secondPage.drawImage(idImagePage, {
		x: width / 2 - sigWidth / 2,
		y: height / 2 - sigHeight / 2,
		width: sigWidth,
		height: sigHeight,
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
