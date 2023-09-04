import TypingEffect from "@/components/_framer/typingEffect";
import { motion } from "framer-motion";
import Image from "next/image";
import Music from "./music";
import Nav from "./nav";
import ParticlesGen from "./particles";
import Share from "./share";
const Header: React.FC = () => {
	return (
		<header id="header">
			<div className="h-screen w-screen">
				<ParticlesGen />
				<div className="relative">
					<Nav />
				</div>
				<Music />
				<Share />
				<div className="flex justify-center items-center h-full relative">
					<div className="w-9/12 flex gap-4 flex-col justify-center items-center">
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
						<h1>
							{<TypingEffect props={{ str: "FEU Tech ACM Student Chapter" }} />}
						</h1>
						<p className="font-hae text-4xl">
							{
								<TypingEffect
									props={{ str: "<Coding Chaos In Digital Dystopia />" }}
								/>
							}
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
