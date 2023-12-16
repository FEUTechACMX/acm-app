import { PDFDocument } from "pdf-lib";
const undertakingEmbedImage = (
	imageBytes: Buffer,
	imgType: number,
	pdf: PDFDocument,
) => {
	switch (imgType) {
		case 1:
			return pdf.embedPng(imageBytes);
		case 2:
			return pdf.embedJpg(imageBytes);
		default:
			throw new Error("Invalid image type");
	}
};

export default undertakingEmbedImage;
