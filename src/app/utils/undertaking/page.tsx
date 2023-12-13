import UndertakingForm from "@/components/utils/undertaking/form";
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
		<div className="h-screen w-screen">
			<div className="flex justify-center items-center h-full relative max-w-3xl m-auto">
				<div className="sm:p-6 rounded-lg flex p-1 w-full sm:w-9/12 gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
					<UndertakingForm props={{ data }} />
				</div>
			</div>
		</div>
	);
};

export default UndertakingPage;
