"use client";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const SigninForm = dynamic(() => import("@/components/2023/signin"));
const ParticlePolygon = dynamic(
	() => import("@/components/2023/signin/particles"),
);
const Signin: NextPage = () => {
	return (
		<section>
			<ParticlePolygon />
			<div className="w-svw h-dvh fixed top-0 left-0">
				<div className="flex justify-center items-center h-full relative max-w-3xl m-auto">
					<div className="sm:p-6 rounded-lg flex p-1 w-full sm:w-9/12 gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
						<SigninForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signin;
