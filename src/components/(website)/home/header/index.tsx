import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkProps } from "types/link";
import ParticlesGen from "./particles";
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
const Header: React.FC = () => {
	return (
		<header id="home">
			<div className="h-screen w-screen">
				<ParticlesGen />
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
							className="text-center"
						>
							FEU Tech ACM Student Chapter
						</motion.h1>
						<motion.q
							animate={{
								opacity: [0, 1],
								transition: {
									duration: 1,
									delay: 1.5,
								},
							}}
							className="font-hae text-4xl"
						>
							&lt;Coding Chaos In Digital Dystopia /&gt;
						</motion.q>
						<motion.div
							animate={{
								opacity: [0, 1],
								transition: {
									duration: 1,
									delay: 2,
								},
							}}
							className="flex flex-col md:flex-row gap-4 justify-center items-center"
						>
							{links.map((link) => {
								return (
									<Link
										href={link.href}
										key={link.name}
										className="hover:text-accents transition-colors underline"
									>
										{link.name}
									</Link>
								);
							})}
						</motion.div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
