import { prisma } from "@/utils/prisman";
import {
	committeeJSON,
	committeeRoleJSON,
	courseJSON,
	courseTypeJSON,
	departmentJSON,
	eventTypeJSON,
	organizationJSON,
	seniorPositionJSON,
	termJSON,
	userTypeJSON,
	yearJSON,
	yearLevelJSON,
} from "public/data/json/export";

const prismaUserType = prisma.userType.createMany({
	data: userTypeJSON,
});
const prismaDepartment = prisma.department.createMany({
	data: departmentJSON,
});

const prismaYear = prisma.year.createMany({
	data: yearJSON,
});

const prismaSeniorPosition = prisma.seniorPosition.createMany({
	data: seniorPositionJSON,
});

const prismaCommittee = prisma.committee.createMany({
	data: committeeJSON,
});

const prismaTerm = prisma.term.createMany({
	data: termJSON,
});

const prismaEventType = prisma.eventType.createMany({
	data: eventTypeJSON,
});

const prismaWorkingCommitteeRole = prisma.workingCommitteeRole.createMany({
	data: committeeRoleJSON,
});

const prismaOrganization = prisma.organization.createMany({
	data: organizationJSON,
});

const prismaYearLevel = prisma.yearLevel.createMany({
	data: yearLevelJSON,
});

const prismaCourseType = prisma.courseType.createMany({
	data: courseTypeJSON,
});

const prismaCourse = prisma.course.createMany({
	data: courseJSON,
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
