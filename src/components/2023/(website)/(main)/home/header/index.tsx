"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkProps } from "types/link";
import ACMImage from "../../_gen/image/acm";
import ParticleAmongUs from "./particles";
const links: LinkProps[] = [
	{
		name: "Become a Member",
		href: "https://forms.gle/Vyxp1Ky2MaZZPmvD6",
	},
	{
		name: "--CS EXPO 2023--",
		href: "/cs-expo",
	},
	{
		name: "Collaborate with us",
		href: "/collaborate",
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
			<div className="h-screen w-screen">
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
							FEU Tech ACM Student Chapter
						</motion.h1>
						<motion.q
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="font-hae text-4xl"
						>
							&lt;Coding Chaos In Digital Dystopia /&gt;
						</motion.q>
						<motion.p
							initial="hidden"
							animate={getAnimate()}
							variants={animationVariants}
							transition={{ duration: 1 }}
							className="flex flex-col md:flex-row gap-4 justify-center items-center"
						>
							{links.map((link, index) => {
								return (
									<motion.span
										key={index}
										initial="hidden"
										animate={getAnimate()}
										variants={animationVariants}
										transition={{ duration: 1, delay: getDelay(index) }}
									>
										<Link
											href={link.href}
											className="hover:bg-accents transition-colors p-2 border-2 border-accents rounded-md shadow-sm shadow-accents"
										>
											{link.name}
										</Link>
									</motion.span>
								);
							})}
						</motion.p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
