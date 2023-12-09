import { readFile, writeFile } from "fs/promises";
import { PDFDocument } from "pdf-lib";
// eslint-disable-next-line no-unused-vars
async function generatePDF(): Promise<void> {
	const existingPdfBytes = await readFile(
		"./public/data/CONFIDENTIALITY-UNDERTAKING-tests.pdf",
	);
	// public/data/CONFIDENTIALITY-UNDERTAKING-tests.pdf
	const pdfDoc = await PDFDocument.load(existingPdfBytes);
	const pages = pdfDoc.getPages();
	const firstPage = pages[0];
	console.log(firstPage.getHeight(), firstPage.getWidth());

	// date format in mm/dd/yyyy in Philippine timezone today
	const date = new Date().toLocaleDateString("en-PH");
	firstPage.drawText(date, {
		x: 400,
		y: 98,
		size: 10,
	});
	const pdfBytes = await pdfDoc.save();
	await writeFile(
		"./public/data/CONFIDENTIALITY-UNDERTAKING-res.pdf",
		pdfBytes,
	);
	console.log("Hello World");
	return void 0;
}
