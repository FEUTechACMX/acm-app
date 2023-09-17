"use client";
import { motion } from "framer-motion";
import ParticleAmongUs from "./particles";
import { LinkProps } from "types/link";
import Image from "next/image";
const links: LinkProps[] = [
	{
		name: "Become a Member",
		href: "/register",
	},
	{
		name: "ACM-X Dashboard",
		href: "/dashboard",
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
import Link from "next/link";
import { useAppSelector } from "@/utils/redux/hooks";
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
							<Image
								src="/media/img/logo/FIT_ACM.png"
								alt="FEU Tech Logo"
								layout={"fill"}
								objectFit={"contain"}
								className="m-auto"
							></Image>
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
									<motion.div
										key={link.name}
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
									</motion.div>
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
