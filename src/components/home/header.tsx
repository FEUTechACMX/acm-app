import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesGen from "./particles";
import Nav from "./nav";
const Header: React.FC = () => {
	return (
		<header id="header">
			<div className="h-screen w-screen">
				<ParticlesGen />
				<div className="relative">
					<Nav />
				</div>
				<div className="flex justify-center items-center h-full relative">
					<div className="w-9/12 flex gap-4 flex-col">
						<motion.div
							animate={{}}
							className="h-28 w-64 relative flex justify-center items-center m-auto"
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
							className="font-ot text-center [text-wrap:balance]"
						>
							FEU Institute of Technology ACM
						</motion.h1>
						<h2 className="font-f1s text-center text-xl">
							Coding Chaos in Digital Dystopia
						</h2>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
