"use client";
import dynamic from "next/dynamic";
const ParticlePolygon = dynamic(
	() => import("@/components/particles/ParticlePolygon"),
);
import CenterComponent from "@/components/wrapper/CenterComponent";
import UndertakingForm from "@/components/utils/undertaking-generator/UndertakingForm";
import { NextPage } from "next";
const UndertakingPage: NextPage = () => {
	return (
		<>
			<ParticlePolygon props={{ canClick: false }} />
			<CenterComponent>
				<UndertakingForm />
			</CenterComponent>
		</>
	);
};

export default UndertakingPage;
