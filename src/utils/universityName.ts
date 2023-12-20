export const universityNameArr = [
	["1", "FEU Tech"],
	["2", "FEU Institute of Technology"],
] as const;

export const getUniversityName = (id: string) => {
	const universityName = universityNameArr.find(
		(university) => university[0] === id,
	);
	if (!universityName) throw new Error("Invalid university id");
	return universityName;
};
