"use client";
import AuthForm from "@/components/2023/(website)/(main)/signin";
import ACMImage from "@/components/2023/(website)/(main)/_gen/image/acm";
import ParticlePolygon from "@/components/2023/(website)/(main)/signin/particles";
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
