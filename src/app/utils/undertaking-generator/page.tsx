import UndertakingForm from "@/components/utils/undertaking-generator/UndertakingForm";
import { NextPage } from "next";

const UndertakingPage: NextPage = async () => {
	return (
		<div className="min-h-screen w-screen">
			<div className="flex justify-center items-center h-full relative max-w-3xl mx-auto m-16">
				<div className="sm:p-6 rounded-lg flex p-1 w-full sm:w-9/12 gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
					<UndertakingForm />
				</div>
			</div>
		</div>
	);
};

export default UndertakingPage;
