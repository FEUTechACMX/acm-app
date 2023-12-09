// import serverWrapper from "@/components/wrapper/serverWrapper";
// import AdmZip from "adm-zip";
// import { readFile, writeFile } from "fs/promises";
// import { NextResponse } from "next/server";
// import { PDFDocument } from "pdf-lib";

// interface Body {
// 	name: string;
// 	signature: string;
// 	studentNumber: string;
// 	yearLvl: string;
// 	program: string;
// 	courseCodes: string[];
// }

// const uniName = "FEU Institute of Technology";
// const zip = new AdmZip();

// const dataPath = "public/data";
// const source = `${dataPath}/CONFIDENTIALITY-UNDERTAKING-STUDENT.pdf`;
// const target = `${dataPath}/ACMX-Undertaking.zip`;
// const signaturePath = `${dataPath}/alpha_signature.png`;
// const idPath = `${dataPath}/alpha_id.jpg`;
// const fontSize = {
// 	title: 7.8,
// 	reg: 10,
// };

// const { title, reg } = fontSize;

// const generatePDF = serverWrapper(async (req) => {
// 	const body: Body = await req.json();
// 	const { name, studentNumber, yearLvl, program, courseCodes } = body;

// 	const existingPdfBytes = await readFile(source);

// 	const date = new Date().toLocaleDateString("en-PH");
// 	const pdfDoc = PDFDocument.load(existingPdfBytes);
// 	const signatureBytes = readFile(signaturePath);
// 	const idBytes = readFile(idPath);

// 	const [pdf] = await Promise.allSettled([pdfDoc]);
// 	const [...rest] = await Promise.allSettled([signatureBytes, idBytes]);
// 	// check if any of the promises failed

// 	rest.forEach((promise) => {
// 		if (promise.status === "rejected") {
// 			throw new Error(promise.reason);
// 		}
// 	});
// 	const [signature, id] = rest.map((promise) => {
// 		if (promise.status === "fulfilled") {
// 			return promise.value;
// 		}
// 	});

// 	// const [pdf, signature, id] = rest.map((promise) => promise.value);
// 	const firstPage = pdf.getPages()[0];

// 	const promises = courseCodes.map(async (course) => {
// 		firstPage.drawText(`${uniName} - ${course}`, {
// 			x: 244,
// 			y: 694,
// 			size: title,
// 		});

// 		firstPage.drawText(date, {
// 			x: 400,
// 			y: 96,
// 			size: reg,
// 		});

// 		firstPage.drawText(name, {
// 			x: 400,
// 			y: 136,
// 			size: reg,
// 		});

// 		firstPage.drawText(`${yearLvl} / ${program}`, {
// 			x: 400,
// 			y: 122,
// 			size: reg,
// 		});

// 		firstPage.drawText(studentNumber, {
// 			x: 400,
// 			y: 110,
// 			size: reg,
// 		});
// 		const coursePdfBytes = await pdfDoc.save();
// 		zip.addFile(
// 			`${course}-CONFIDENTIALITY-UNDERTAKING.pdf`,
// 			Buffer.from(coursePdfBytes),
// 		);
// 	});

// 	await Promise.allSettled(promises);

// 	const zipBuffer = zip.toBuffer();

// 	// Note: return to client and not write to disk
// 	await writeFile(target, zipBuffer);
// 	console.log("PDFs generated, zipped and saved to disk");

// 	return NextResponse.json({
// 		message: "PDFs generated, zipped and saved to disk",
// 	});
// });

// export { generatePDF as POST };
