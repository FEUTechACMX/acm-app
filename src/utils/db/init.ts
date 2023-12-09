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
			role: "PROJECT HEAD",
		},
		{
			role: "PROJECT CO-HEAD",
		},
		{
			role: "CREATIVES HEAD",
		},
		{
			role: "EXTERNALS HEAD",
		},
		{
			role: "FINANCE HEAD",
		},
		{
			role: "PROGRAMS HEAD",
		},
		{
			role: "PUBLICATIONS HEAD",
		},
		{
			role: "PUBLICITY HEAD",
		},
		{
			role: "SECRETARIAT HEAD",
		},
		{
			role: "TECHNICALS HEAD",
		},
		{
			role: "ACADEMICS HEAD",
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
			name: " INTRODUCTION TO COMPUTING (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "CCS0001L",
			name: "INTRODUCTION TO COMPUTING (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0004",
			name: "PHYSICAL EDUCATION 1",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0006",
			name: "PERSONAL AND PROFESSIONAL EFFECTIVENESS",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0009",
			name: "READINGS IN PHILIPPINE HISTORY",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "GED0011",
			name: "SCIENCE, TECHNOLOGY AND SOCIETY",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 1,
		},
		{
			code: "CCS0005",
			name: "INTRODUCTION TO HUMAN COMPUTER INTERACTION (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0005L",
			name: "INTRODUCTION TO HUMAN COMPUTER INTERACTION (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0007",
			name: "COMPUTER PROGRAMMING 2 (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0007L",
			name: "COMPUTER PROGRAMMING 2 (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0001",
			name: "SPECIALIZED ENGLISH PROGRAM 1",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0015",
			name: "PHYSICAL EDUCATION 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0027",
			name: "MATHEMATICS IN THE MODERN WORLD",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "GED0029",
			name: "ANALYTIC GEOMETRY WITH CALCULUS",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "NSTP1",
			name: "CIVIC WELFARE TRAINING SERVICE 1",
			departmentId: 4,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 2,
		},
		{
			code: "CCS0015",
			name: "DATA STRUCTURES AND ALGORITHMS (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0015L",
			name: "DATA STRUCTURES AND ALGORITHMS (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0105",
			name: "PROFESSIONAL DEVELOPMENT (COMPUTING PROFESSION)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0007",
			name: "ART APPRECIATION ",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0023",
			name: "PHYSICAL EDUCATION 3",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0035",
			name: "THE CONTEMPORARY WORLD",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0040",
			name: "APPLIED STATISTICS FOR CS",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "GED0055",
			name: "MATHEMATICAL ANALYSIS",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "NSTP2",
			name: "CIVIC WELFARE TRAINING SERVICE 2",
			departmentId: 4,
			courseTypeId: 1,
			yearLevelId: 1,
			termId: 3,
		},
		{
			code: "CCS0021",
			name: "INFORMATION MANAGEMENT (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CCS0021L",
			name: "INFORMATION MANAGEMENT (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0001",
			name: "DISCRETE STRUCTURES 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0003",
			name: "COMPUTER SYSTEMS & ARCHITECTURE (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0003L",
			name: "COMPUTER SYSTEMS & ARCHITECTURE (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0070",
			name: "OBJECT ORIENTED PROGRAMMING (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CS0070L",
			name: "OBJECT ORIENTED PROGRAMMING (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0021",
			name: "SPECIALIZED ENGLISH PROGRAM 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0075",
			name: "LINEAR ALGEBRA",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0081",
			name: "COLLEGE PHYSICS 1 LECTURE",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "GED0081L",
			name: "COLLEGE PHYSICS 1 LABORATORY",
			departmentId: 2,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 1,
		},
		{
			code: "CCS0101",
			name: "DESIGN THINKING (CCS)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0007",
			name: "ALGORITHM",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0010",
			name: "FUNDAMENTALS OF ANALYTICS",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0017",
			name: "OPERATING SYSTEM",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CS0021",
			name: "DISCRETE STRUCTURES 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "GED0083",
			name: "COLLEGE PHYSICS 2 LECTURE",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "GED0083L",
			name: "COLLEGE PHYSICS 2 LABORATORY",
			departmentId: 2,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 2,
		},
		{
			code: "CCS0043",
			name: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES (LEC)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CCS0043L",
			name: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES (LAB)",
			departmentId: 1,
			courseTypeId: 2,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CCS0103",
			name: "TECHNOPRENEURSHIP (CCS)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0005",
			name: "DATABASE SYSTEMS",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0013",
			name: "NETWORKS AND COMMUNICATIONS 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0023",
			name: "AUTOMATA THEORY AND FORMAL LANGUAGES",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0048",
			name: "CS SPECIALIZATION 1 (STRUCTURED PROGRAMMING LANGUAGE)",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "GED0031",
			name: "PURPOSIVE COMMUNICATION",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 2,
			termId: 3,
		},
		{
			code: "CS0011",
			name: "MOBILE PROGRAMMING",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0016",
			name: "NETWORK AND COMMUNICATIONS 2A",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0019",
			name: "MODELING AND SIMULATION",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0025",
			name: "SOFTWARE ENGINEERING 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0045",
			name: "CS ELECTIVE - COMPUTER GRAPHICS AND VISUAL COMPUTING",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0053",
			name: "CS SPECIALIZATION 2 - PROGRAMMING TOOLS AND TECHNIQUES",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "GED0085",
			name: "GENDER AND SOCIETY",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 1,
		},
		{
			code: "CS0027",
			name: "CS PROJECT MANAGEMENT",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0031",
			name: "SOFTWARE ENGINEERING 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0035",
			name: "PROGRAMMING LANGUAGES",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0051",
			name: "CS ELECTIVE - PARALLEL AND DISTRIBUTED COMPUTING",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CS0057",
			name: "CS SPECIALIZATION 3 - IMAGE PROCESSING",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "GED0019",
			name: "UNDERSTANDING THE SELF",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "GED0059",
			name: "MATHEMATICAL METHODS",
			departmentId: 2,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 2,
		},
		{
			code: "CCS0047",
			name: "NUMBER THEORY",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0029",
			name: "INFORMATION ASSURANCE AND SECURITY",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0033",
			name: "CS PROJECT 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0061",
			name: "CS SPECIALIZATION 4 - BUSINESS PROCESS FOR COMPUTING",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "GED0061",
			name: "ETHICS",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "GED0073",
			name: "GE ELECTIVE 2",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 3,
			termId: 3,
		},
		{
			code: "CS0037",
			name: "SOCIAL ISSUES AND PROFESSIONAL PRACTICE",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0039",
			name: "CS PROJECT 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0066",
			name: "CS ELECTIVE 3 - BLOCKCHAIN TECHNOLOGY",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0047",
			name: "FOREIGN LANGUAGE",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0049",
			name: "LIFE AND WORKS OF RIZAL",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "GED0065",
			name: "ENVIRONMENTAL SCIENCE",
			departmentId: 3,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 1,
		},
		{
			code: "CS0041",
			name: "INTERNSHIP 1",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 2,
		},
		{
			code: "CS0043",
			name: "INTERNSHIP 2",
			departmentId: 1,
			courseTypeId: 1,
			yearLevelId: 4,
			termId: 2,
		},
	],
});

export {
	prismaCommittee,
	prismaCourse,
	prismaCourseType,
	prismaDepartment,
	prismaEventType,
	prismaOrganization,
	prismaSeniorPosition,
	prismaTerm,
	prismaUserType,
	prismaWorkingCommitteeRole,
	prismaYear,
	prismaYearLevel,
};
