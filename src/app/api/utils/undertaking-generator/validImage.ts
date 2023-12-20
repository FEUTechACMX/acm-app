const extMap = new Map([
	["image/png", 1],
	["image/jpg", 2],
	["image/jpeg", 2],
]);
const undertakingImgType = (ext: string) => {
	const imgType = extMap.get(ext);
	if (!imgType) throw new Error("Invalid image type");
	return imgType;
};

export default undertakingImgType;
