const extMap = new Map([
	["image/png", 1],
	["image/jpg", 2],
	["image/jpeg", 2],
]);
const undertakingImgType = (ext: string) => {
	if (extMap.has(ext)) return extMap.get(ext);
	throw new Error("Invalid image type");
};

export default undertakingImgType;
