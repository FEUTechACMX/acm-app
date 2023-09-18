"use client";
import ParticlePolygon from "@/components/(app)/signin/particles";
import AuthForm from "@/components/(website)/signin";
import ACMImage from "@/components/_gen/acm";
import { NextPage } from "next";
const Signin: NextPage = () => {
	return (
		<section>
			<ParticlePolygon />
			<div className="h-screen w-screen">
				<div className="flex justify-center items-center h-full relative">
					<div className="w-11/12 flex gap-4 flex-col justify-center items-center">
						<div className="h-28 w-64 relative">
							<ACMImage />
						</div>
						<h1 className="text-center drop-shadow-[0_4px_2px_rgba(255,255,255,0.3)]">
							FEU Tech ACM-X Signin
						</h1>
						<AuthForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signin;
