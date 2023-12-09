import prismaPopulate from "@/utils/db/init";
import { prisma } from "@/utils/prisman";
import { Prisma } from "@prisma/client";
const tableNames = Object.values(Prisma.ModelName);
async function prismaDelete() {
	for (const tableName of tableNames) {
		try {
			await prisma.$queryRawUnsafe(`DROP TABLE "${tableName}" CASCADE;`);
		} catch (error) {
			// console.error(error);
		}
		continue;
	}
	console.log("Truncate all tables");
}
export { prismaDelete as DELETE, prismaPopulate as GET };
