import * as queries from "@/utils/db/init";
import { prisma } from "@/utils/prisman";
async function prismaPopulate() {
	try {
		const res = await Promise.allSettled(
			Object.values(queries).map((query) => query),
		);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}
async function prismaDelete() {
	await prisma.$executeRaw`TRUNCATE TABLE "Position"`;
}
export { prismaDelete as DELETE, prismaPopulate as GET };
