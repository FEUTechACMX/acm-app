"use client";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleNav } from "@/utils/redux/slices/(website)/nav";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkProps } from "types/link";
import Music from "../side/music";
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
		href: "signin",
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
				<p className="font-bold text-xl hover:text-accents transition-colors">
					FEU&nbsp;Tech&nbsp;ACM
				</p>
			</Link>
			<div
				className={`${
					isOpen
						? "fixed w-screen h-screen justify-center flex-col flex items-center bg-panelBg top-0 left-0 z-10"
						: "hidden"
				} md:flex md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-between`}
			>
				{links.map((link) => {
					return (
						<Music
							key={link.name}
							props={{
								onClick: {
									path: "/media/sfx/gun_shot.mp3",
									isLooped: false,
								},
								onMouseOver: {
									path: "/media/sfx/gun_cocking_short.mp3",
									isLooped: false,
								},
							}}
						>
							<Link href={link.href} onClick={() => dispatch(toggleNav())}>
								<p className="p-2 rounded-lg hover:text-accents active:text-accents focus:text-accents transition-colors">
									{link.name}
								</p>
							</Link>
						</Music>
					);
				})}
			</div>
			<div className="flex md:hidden z-10">
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
