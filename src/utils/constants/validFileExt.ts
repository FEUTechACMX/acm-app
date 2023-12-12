const validFileExtensions = {
	image: new Set(["png", "jpg", "jpeg", "svg"] as const),
} as const;

export default validFileExtensions;
