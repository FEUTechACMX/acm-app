import dynamic from "next/dynamic";
const ParticlePolygon = dynamic(
	() => import("@/components/particles/ParticlePolygon"),
);

import UndertakingForm from "@/components/utils/undertaking-generator/UndertakingForm";
import { NextPage } from "next";
const UndertakingPage: NextPage = async () => {
	return (
		<div className="min-h-screen w-svw grid place-items-center">
			<ParticlePolygon props={{ canClick: false }} />
			<div className="flex justify-center items-center h-full relative max-w-3xl mx-auto m-16">
				<div className="sm:p-6 rounded-lg flex p-1 w-full gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
					<UndertakingForm />
				</div>
			</div>
		</div>
	);
};

export default UndertakingPage;
