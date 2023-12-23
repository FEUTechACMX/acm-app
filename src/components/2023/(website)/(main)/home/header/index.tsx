"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { LinkProps } from "types/link";
import ACMImage from "../../_gen/image/ACMImage";
import ParticleAmongUs from "./particles";
import PlayStore from "./playstore";
const links: LinkProps[] = [
	{
		name: "CS EXPO 2023",
		href: "https://cs-expo-2023.vercel.app/",
	},
	{
		name: "Undertaking Generator",
		href: "/utils/undertaking-generator",
	},
	{
		name: "Collaborate With Us!",
		href: "mailto:acm.feu.it@gmail.com",
	},
];

const animationVariants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
};
const Header: React.FC = () => {
	const { isFeaturedShown } = useAppSelector(
		(state) => state.initialPromptReducer,
	);

	function getAnimate() {
		return isFeaturedShown ? "hidden" : "visible";
	}

	const getDelay = (index: number) => {
		return index * 0.5;
	};

	return (
		<header id="home">
			<div className="h-screen w-screen fixed top-0 left-0">
				<ParticleAmongUs />
				<div className="flex justify-center items-center h-full relative">
					<div className="w-11/12 flex gap-4 flex-col justify-center items-center">
						<motion.div
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="h-28 w-64 relative"
						>
							<ACMImage />
						</motion.div>
						<motion.h1
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="text-center drop-shadow-[0_4px_2px_rgba(255,255,255,0.3)]"
						>
							FEU Tech ACM Student&nbsp;Chapter
						</motion.h1>
						<motion.q
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="font-hae text-4xl font-semibold"
						>
							&lt;Coding Chaos In Digital Dystopia /&gt;
						</motion.q>
						<motion.p
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="flex  w-7/12 sm:w-5/12  flex-col md:flex-row gap-2 items-stretch"
						>
							{links.map((link, index) => {
								return (
									<motion.span
										key={index}
										initial="hidden"
										animate={getAnimate()}
										variants={animationVariants}
										transition={{ duration: 1, delay: getDelay(index) }}
										className="w-full flex"
									>
										<Button
											href={link.href}
											as={Link}
											variant="shadow"
											radius="sm"
											className="flex justify-center items-center text-center text-lg  w-full  p-2"
										>
											{link.name}
										</Button>
									</motion.span>
								);
							})}
						</motion.p>
					</div>
				</div>
			</div>
			<PlayStore />
		</header>
	);
};

export default Header;
