import serverWrapper from "@/components/wrapper/serverWrapper";
import AdmZip from "adm-zip";
import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
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
const generatePDF = serverWrapper(async (req) => {
	const body = await req.json();
	const { name, studentNumber, yearLvl, program, courseCodes } = body as Body;

	const existingPdfBytes = await readFile(
		path.join("public", "data", "CONFIDENTIALITY-UNDERTAKING-STUDENT.pdf"),
	);

	const date = new Date().toLocaleDateString("en-PH");
	const zip = new AdmZip();

	const promises = courseCodes.map(async (course) => {
		const pdfDoc = await PDFDocument.load(existingPdfBytes);
		const pages = pdfDoc.getPages();
		const firstPage = pages[0];

		firstPage.drawText(`${uniName} - ${course}`, {
			x: 244,
			y: 694,
			size: 7.8,
		});

		firstPage.drawText(date, {
			x: 400,
			y: 96,
			size: 10,
		});

		firstPage.drawText(name, {
			x: 400,
			y: 136,
			size: 10,
		});

		firstPage.drawText(`${yearLvl} / ${program}`, {
			x: 400,
			y: 122,
			size: 10,
		});

		firstPage.drawText(studentNumber, {
			x: 400,
			y: 110,
			size: 10,
		});
		const coursePdfBytes = await pdfDoc.save();
		zip.addFile(`${course}.pdf`, Buffer.from(coursePdfBytes));
	});

	const result = await Promise.allSettled(promises);
	console.log(result);

	const zipBuffer = zip.toBuffer();

	const zipPath = path.join(
		"public",
		"data",
		"CONFIDENTIALITY-UNDERTAKING-alpha.zip",
	);

	await writeFile(zipPath, zipBuffer);

	return NextResponse.json({
		message: "PDFs generated, zipped and saved to disk",
	});
});

export { generatePDF as POST };
