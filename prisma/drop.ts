import { prisma } from "@/utils/prisman";
import { Prisma } from "@prisma/client";
const tableNames = Object.values(Prisma.ModelName);
async function main() {
	for (const tableName of tableNames) {
		try {
			await prisma.$queryRawUnsafe(`DROP TABLE "${tableName}" CASCADE;`);
		} catch (error) {
			console.error(error);
		}
		continue;
	}
	console.log("Tables dropped");
}

main();
