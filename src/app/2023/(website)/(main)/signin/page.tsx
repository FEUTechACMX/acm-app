"use client";
import AuthForm from "@/components/2023/(website)/(main)/signin";
import { NextPage } from "next";
import ParticlePolygon from "@/components/2023/(website)/(main)/signin/particles";
const Signin: NextPage = () => {
	return (
		<section>
			{/* <ParticlePolygon /> */}
			<div className="h-screen w-screen">
				<div className="flex justify-center items-center h-full relative max-w-3xl m-auto">
					<div className="sm:p-6 rounded-lg flex p-1 w-full sm:w-9/12 gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
						<AuthForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signin;
