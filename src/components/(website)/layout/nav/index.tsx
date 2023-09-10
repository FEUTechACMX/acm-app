"use client";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleNav } from "@/utils/redux/slices/(website)/nav";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkProps } from "types/link";
const links: LinkProps[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Featured",
		href: "#featured",
	},
	{
		name: "Events",
		href: "#events",
	},
	{
		name: "Merch",
		href: "#merch",
	},
	{
		name: "Committees",
		href: "#committees",
	},
	{
		name: "Contact",
		href: "#contact",
	},
	{
		name: "Signin",
		href: "/signin",
	},
];
const Nav: React.FC = () => {
	const isOpen = useAppSelector((state) => state.navReducer.isNavOpen);
	const dispatch = useAppDispatch();
	return (
		<motion.nav
			id="home-nav"
			animate={{
				opacity: [0, 1],
				transition: {
					duration: 1,
					delay: 2,
				},
			}}
			className="w-screen fixed p-2 border-t-4 border-panelBg border-solid z-20 flex justify-between font-bold backdrop-blur"
		>
			<Link href="/" className="flex justify-center items-center">
				<div className="relative h-8 w-16">
					<Image
						src="/media/img/logo/FIT_ACM.png"
						alt="FEU Tech Logo"
						layout={"fill"}
						objectFit={"contain"}
						className="m-auto"
					></Image>
				</div>
				<p className=" font-bold hover:text-accents transition-colors">
					FEU&nbsp;Tech&nbsp;ACM
				</p>
			</Link>
			<div className="hidden md:flex text-lg">
				{links.map((link, index) => {
					return (
						<Link href={link.href} key={index}>
							<p className="p-2 rounded-lg hover:text-accents active:text-accents focus:text-accents transition-colors">
								{link.name}
							</p>
						</Link>
					);
				})}
			</div>
			<div className="flex md:hidden">
				<button onClick={() => dispatch(toggleNav())}>
					{isOpen ? (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 text-accents hover:text-accentsDark transition-colors"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</>
					) : (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 text-accents hover:text-accentsDark transition-colors"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</>
					)}
				</button>
			</div>
		</motion.nav>
	);
};

export default Nav;
