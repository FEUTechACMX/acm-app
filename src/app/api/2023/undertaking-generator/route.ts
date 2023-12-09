import serverWrapper from "@/components/wrapper/serverWrapper";
import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

// eslint-disable-next-line no-unused-vars
const generatePDF = serverWrapper(async (_, res) => {
	const existingPdfBytes = await readFile(
		"./public/data/CONFIDENTIALITY-UNDERTAKING-tests.pdf",
	);
	// public/data/CONFIDENTIALITY-UNDERTAKING-tests.pdf
	const pdfDoc = await PDFDocument.load(existingPdfBytes);
	const pages = pdfDoc.getPages();
	const firstPage = pages[0];

	// date format in mm/dd/yyyy in Philippine timezone today
	const date = new Date().toLocaleDateString("en-PH");
	firstPage.drawText(date, {
		x: 400,
		y: 96,
		size: 10,
	});

	firstPage.drawText("Alpha Romer Coma", {
		x: 400,
		y: 136,
		size: 10,
	});

	const pdfBytes = await pdfDoc.save();
	await writeFile(
		"./public/data/CONFIDENTIALITY-UNDERTAKING-res.pdf",
		pdfBytes,
	);
	console.log("Hello World");
	return NextResponse.json({ message: "Hello World" });
});

export { generatePDF as GET };
