import UndertakingForm from "@/components/utils/undertaking";
import { prisma } from "@/utils/prisman";
import { NextPage } from "next";
const getCourses = async () => {
	const data = await prisma.course.findMany({
		include: {
			department: true,
			courseType: true,
			yearLevel: true,
			term: true,
		},
	});
	return data;
};

export type UndertakingData = Awaited<ReturnType<typeof getCourses>>;

const UndertakingPage: NextPage = async () => {
	const data = await getCourses();
	return (
		<section>
			<div className="h-screen w-screen">
				<div className="flex justify-center items-center h-full relative m-auto">
					<UndertakingForm props={{ data }} />
				</div>
			</div>
		</section>
	);
};

export default UndertakingPage;
