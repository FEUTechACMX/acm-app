"use client";
import Image from "next/image";
import AuthForm from "@/components/(website)/signin";
import GenParticles from "@/components/(app)/signin/particles";
const Signin: React.FC = () => {
	return (
		<section>
			<GenParticles />
			<div className="h-screen w-screen">
				<div className="flex justify-center items-center h-full relative">
					<div className="w-11/12 flex gap-4 flex-col justify-center items-center">
						<div className="h-28 w-64 relative">
							<Image
								src="/media/img/logo/FIT_ACM.png"
								alt="FEU Tech Logo"
								layout={"fill"}
								objectFit={"contain"}
								className="m-auto"
							></Image>
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
