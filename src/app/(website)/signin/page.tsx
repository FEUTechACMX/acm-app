"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import GenParticles from "@/components/(app)/signin/particles";
import AuthForm from "@/components/(website)/signin";

const Signin: React.FC = () => {
	return (
		<header id="home" className="h-screen w-screen">
			<div className="h-screen w-screen">
				<GenParticles />
				<motion.div
					animate={{
						opacity: [0, 1],
						transition: {
							duration: 1,
							delay: 2,
						},
					}}
				></motion.div>
				<div className="flex justify-center items-center h-full relative">
					<div className="w-11/12 flex gap-4 flex-col justify-center items-center">
						<motion.div
							animate={{
								opacity: [0, 1],
								transition: {
									duration: 1,
									delay: 0.5,
								},
							}}
							className="h-28 w-64 relative"
						>
							<Image
								src="/media/img/logo/FIT_ACM.png"
								alt="FEU Tech Logo"
								layout={"fill"}
								objectFit={"contain"}
								className="m-auto"
							></Image>
						</motion.div>
						<motion.h1
							animate={{
								opacity: [0, 1],
								transition: {
									duration: 1,
									delay: 1,
								},
							}}
							className="text-center drop-shadow-[0_4px_2px_rgba(255,255,255,0.3)]"
						>
							FEU Tech ACM Student Chapter
						</motion.h1>
						<AuthForm />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Signin;
