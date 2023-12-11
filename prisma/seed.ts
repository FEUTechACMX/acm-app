import { prisma } from "@/utils/prisman";

const prismaUserType = prisma.userType.createMany({
	data: [
		{
			user_type: "Admin",
		},
		{
			user_type: "Student",
		},
		{
			user_type: "Faculty",
		},
		{
			user_type: "Guest",
		},
	],
});
const prismaDepartment = prisma.department.createMany({
	data: [
		{
			name: "CS",
			abbreviation: "Computer Science",
		},
		{
			name: "MPS",
			abbreviation: "Mathematics and Physical Sciences",
		},
		{
			name: "HSC",
			abbreviation: "Humanities and Social Sciences",
		},
		{
			name: "NSTP",
			abbreviation: "National Service Training Program",
		},
	],
});

const prismaYear = prisma.year.createMany({
	data: [
		{
			year: 2023,
		},
		{
			year: 2024,
		},
	],
});

const prismaSeniorPosition = prisma.seniorPosition.createMany({
	data: [
		{
			name: "President",
			managerId: null,
		},
		{
			name: "VP Internal",
			managerId: 1,
		},
		{
			name: "VP External",
			managerId: 1,
		},
		{
			name: "Secretary",
			managerId: 2,
		},
		{
			name: "Treasurer",
			managerId: 2,
		},
		{
			name: "Auditor",
			managerId: 2,
		},
		{
			name: "PRO",
			managerId: 3,
		},
		{
			name: "Director for Documentation",
			managerId: 2,
		},
		{
			name: "Director for Academics",
			managerId: 2,
		},
		{
			name: "Director for Technicals",
			managerId: 2,
		},
		{
			name: "Webmaster",
			managerId: 2,
		},
		{
			name: "Director for Events",
			managerId: 2,
		},
		{
			name: "Director for Logistics",
			managerId: 2,
		},
		{
			name: "Director for Sports",
			managerId: 2,
		},
		{
			name: "Director for Media",
			managerId: 3,
		},
		{
			name: "Director for Creatives",
			managerId: 3,
		},
		{
			name: "Director for Outreach",
			managerId: 3,
		},
		{
			name: "Director for Publication",
			managerId: 3,
		},
		{
			name: "Director for Publicity",
			managerId: 3,
		},
	],
});

const prismaCommittee = prisma.committee.createMany({
	data: [
		{
			name: "Academics Committee",
		},
		{
			name: "Technical Committee",
		},
		{
			name: "Events",
		},
		{
			name: "Logistics",
		},
		{
			name: "Sports",
		},
		{
			name: "Media",
		},
		{
			name: "Creatives",
		},
		{
			name: "Outreach",
		},
		{
			name: "Publication",
		},
		{
			name: "Publicity",
		},
	],
});

const prismaTerm = prisma.term.createMany({
	data: [
		{
			term: "1st",
		},
		{
			term: "2nd",
		},
		{
			term: "3rd",
		},
	],
});

const prismaEventType = prisma.eventType.createMany({
	data: [
		{
			type: "Academic Competition",
		},
		{
			type: "Convention",
		},
		{
			type: "General Assembly",
		},
		{
			type: "Seminar/Workshop",
		},
		{
			type: "Outreach",
		},
	],
});

const prismaWorkingCommitteeRole = prisma.workingCommitteeRole.createMany({
	data: [
		{
			role: "Project Head",
		},
		{
			role: "Project Co-Head",
		},
		{
			role: "Creatives Head",
		},
		{
			role: "Externals Head",
		},
		{
			role: "Finance Head",
		},
		{
			role: "Programs Head",
		},
		{
			role: "Publications Head",
		},
		{
			role: "Publicity Head",
		},
		{
			role: "Secretariat Head",
		},
		{
			role: "Technicals Head",
		},
		{
			role: "Academics Head",
		},
	],
});

const prismaOrganization = prisma.organization.createMany({
	data: [
		{
			acronym: "AITS",
			name: "FEU Tech Alliance of Information Technology Students ",
			siteLink: "https://www.facebook.com/feutechAITS",
		},
		{
			acronym: "MECHS",
			name: "Mechanical Engineering Chain of Societies - FEU Tech",
			siteLink: "https://www.facebook.com/FEUTechMEChS",
		},
		{
			acronym: "FSOC",
			name: "FEU TECH Freshmen Society ",
			siteLink: "https://www.facebook.com/FEUTechFSoc",
		},
		{
			acronym: "ECESS",
			name: "Electronics Engineering Students' Society - FEU Tech ",
			siteLink: "https://www.facebook.com/feutechECESS",
		},
		{
			acronym: "JPCS",
			name: "Junior Philippine Computer Society - FEU Tech ",
			siteLink: "https://www.facebook.com/feutechJPCS",
		},
		{
			acronym: "GDSC",
			name: "Google Developer Student Clubs - FEU Institute of Technology ",
			siteLink: "https://www.facebook.com/GDSCFEUTech",
		},
		{
			acronym: "CPEO",
			name: "Computer Engineering Organization - FEU Institute of Technology ",
			siteLink: "https://www.facebook.com/feutechCpEO",
		},
		{
			acronym: "TEC",
			name: "FIT iTamaraws Esports Club",
			siteLink: "https://www.facebook.com/iTamarawsEsportsClub",
		},
		{
			acronym: "AC",
			name: "Artist Connection",
			siteLink: "https://www.facebook.com/feutechAC",
		},
		{
			acronym: "ACES",
			name: "Association of Civil Engineering Students - FEU Institute of Technology",
			siteLink: "https://www.facebook.com/feutechACES",
		},
		{
			acronym: "ASTI",
			name: "Association of Student Technopreneurs and Innovators - FEU Tech",
			siteLink: "https://www.facebook.com/feutechASTI",
		},
	],
});

const prismaYearLevel = prisma.yearLevel.createMany({
	data: [
		{
			year: 1,
		},
		{
			year: 2,
		},
		{
			year: 3,
		},
		{
			year: 4,
		},
	],
});

const prismaCourseType = prisma.courseType.createMany({
	data: [
		{
			type: "Lecture",
		},
		{
			type: "Laboratory",
		},
	],
});

const prismaCourse = prisma.course.createMany({
	data: [
		{
			code: "CCS0001",
			name: " Introduction to Computing (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "CCS0001L",
			name: "Introduction to Computing (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0004",
			name: "Physical Education 1",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0006",
			name: "Personal and Professional Effectiveness",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0009",
			name: "Readings In Philippine History",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0011",
			name: "Science, Technology and Society",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "CCS0005",
			name: "Introduction to Human Computer Interaction (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0005L",
			name: "Introduction to Human Computer Interaction (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0007",
			name: "Computer Programming 2 (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0007L",
			name: "Computer Programming 2 (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0001",
			name: "Specialized English Program 1",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0015",
			name: "Physical Education 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0027",
			name: "Mathematics in the Modern World",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0029",
			name: "Analytic Geometry with Calculus",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "NSTP1",
			name: "Civic Welfare Training Service 1",
			departmentId: 4,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0015",
			name: "Data Structures and Algorithms (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0015L",
			name: "Data Structures and Algorithms (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0105",
			name: "Professional Development (Computing Profession)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0007",
			name: "Art Appreciation ",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0023",
			name: "Physical Education 3",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0035",
			name: "the Contemporary World",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0040",
			name: "Applied Statistics for CS",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0055",
			name: "Mathematical Analysis",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "NSTP2",
			name: "Civic Welfare Training Service 2",
			departmentId: 4,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0021",
			name: "Information Management (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CCS0021L",
			name: "Information Management (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0001",
			name: "Discrete Structures 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0003",
			name: "Computer Systems & Architecture (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0003L",
			name: "Computer Systems & Architecture (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0070",
			name: "Object Oriented Programming (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0070L",
			name: "Object Oriented Programming (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0021",
			name: "Specialized English Program 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0075",
			name: "Linear Algebra",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0081",
			name: "College Physics 1 Lecture",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0081L",
			name: "College Physics 1 Laboratory",
			departmentId: 2,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CCS0101",
			name: "Design Thinking (CCS)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0007",
			name: "Algorithm",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0010",
			name: "Fundamentals of Analytics",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0017",
			name: "Operating System",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0021",
			name: "Discrete Structures 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "GED0083",
			name: "College Physics 2 Lecture",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "GED0083L",
			name: "College Physics 2 Laboratory",
			departmentId: 2,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CCS0043",
			name: "Applications Development and Emerging Technologies (Lec)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CCS0043L",
			name: "Applications Development and Emerging Technologies (Lab)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CCS0103",
			name: "Technopreneurship (CSS)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0005",
			name: "Database Systems",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0013",
			name: "Networks and Communications 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0023",
			name: "Automata Theory and Formal Languages",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0048",
			name: "CS Specialization 1 (Structured Programming Language)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "GED0031",
			name: "Purposive Communication",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0011",
			name: "Mobile Programming",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0016",
			name: "Network and Communications 2a",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0019",
			name: "Modeling and Simulation",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0025",
			name: "Software Engineering 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0045",
			name: "CS Elective - Computer Graphics and Visual Computing",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0053",
			name: "CS Specialization 2 - Programming Tools and Techniques",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "GED0085",
			name: "Gender and Society",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0027",
			name: "CS Project Management",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0031",
			name: "Software Engineering 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0035",
			name: "Programming Languages",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0051",
			name: "CS Elective - Parallel and Distributed Computing",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0057",
			name: "CS Specialization 3 - Image Processing",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "GED0019",
			name: "Understanding the Self",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "GED0059",
			name: "Mathematical Methods",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CCS0047",
			name: "Number Theory",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0029",
			name: "Information Assurance and Security",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0033",
			name: "CS Project 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0061",
			name: "CS Specialization 4 - Business Process for Computing",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "GED0061",
			name: "Ethics",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "GED0073",
			name: "Ge Elective 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0037",
			name: "Social Issues and Professional Practice",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0039",
			name: "CS Project 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0066",
			name: "CS Elective 3 - Blockchain Technology",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0047",
			name: "Foreign Language",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0049",
			name: "Life and Works of Rizal",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0065",
			name: "Environmental Science",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0041",
			name: "Internship 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 2,
		},
		{
			code: "CS0043",
			name: "Internship 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 2,
		},
	],
});

async function main() {
	try {
		console.log("Populating database...");
		const res1 = await Promise.allSettled([
			prismaUserType,
			prismaDepartment,
			prismaYear,
			prismaSeniorPosition,
			prismaCommittee,
			prismaTerm,
			prismaEventType,
			prismaWorkingCommitteeRole,
			prismaOrganization,
			prismaYearLevel,
			prismaCourseType,
		]);
		const res2 = await Promise.allSettled([prismaCourse]);
		console.log(res1, res2);

		console.log("Database populated!");
	} catch (err) {
		console.log(err);
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
