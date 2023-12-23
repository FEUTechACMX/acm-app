"use client";
import InlineFont from "@/utils/font/InlineFont";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleNav } from "@/utils/redux/slices/(website)/nav";
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/legacy/image";
import {
	FaHouseChimney,
	FaMedal,
	FaPeopleGroup,
	FaRegCalendarDays,
	FaFirstOrder,
	FaShop,
	FaPhone,
} from "react-icons/fa6";
import { LinkProps } from "types/link";
const links: LinkProps[] = [
	{
		name: "Home",
		href: "/",
		icon: <FaHouseChimney />,
	},
	{
		name: "About",
		href: "/2023/about",
		icon: <FaPeopleGroup />,
	},
	{
		name: "Featured",
		href: "/2023/featured",
		icon: <FaMedal />,
	},
	{
		name: "Events",
		href: "/2023/events",
		icon: <FaRegCalendarDays />,
	},
	{
		name: "Merch",
		href: "/2023/merch",
		icon: <FaShop />,
	},
	{
		name: "Committees",
		href: "/2023/committees",
		icon: <FaFirstOrder />,
	},
	{
		name: "Contact",
		href: "/2023/contact",
		icon: <FaPhone />,
	},
];
const Nav: React.FC = () => {
	const isOpen = useAppSelector((state) => state.navReducer.isNavOpen);
	const dispatch = useAppDispatch();

	return (
		<Navbar
			isBordered
			isMenuOpen={isOpen}
			onMenuOpenChange={() => dispatch(toggleNav())}
			classNames={{
				item: [
					"flex",
					"relative",
					"h-full",
					"items-center",
					"data-[active=true]:after:content-['']",
					"data-[active=true]:after:absolute",
					"data-[active=true]:after:bottom-0",
					"data-[active=true]:after:left-0",
					"data-[active=true]:after:right-0",
					"data-[active=true]:after:h-[2px]",
					"data-[active=true]:after:rounded-[2px]",
					"data-[active=true]:after:bg-primary",
				],
			}}
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>
			<NavbarBrand className="flex justify-center sm:justify-start">
				<Link href="/" color="foreground">
					<div className="relative h-8 w-16">
						<Image
							src="/2023/media/img/logo/FIT_ACM.png"
							alt="FEU Tech ACM Logo"
							layout={"fill"}
							objectFit={"contain"}
							className="m-auto"
						></Image>
					</div>
					<p className="font-bold text-2xl hidden sm:block">FEU Tech ACM</p>
				</Link>
			</NavbarBrand>

			<NavbarMenu>
				{links.map((link) => {
					return (
						<NavbarMenuItem key={link.name}>
							<Link href={link.href} className="text-2xl" color="foreground">
								<InlineFont>
									{link.icon}
									{link.name}
								</InlineFont>
							</Link>
						</NavbarMenuItem>
					);
				})}
			</NavbarMenu>

			{/* <NavbarContent className="sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link href="/2023/home">
						<InlineFont>
							<FaHouseChimney />
							Home
						</InlineFont>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/2023/about">
						<InlineFont>
							<FaPeopleGroup />
							About
						</InlineFont>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/2023/featured">
						<InlineFont>
							<FaMedal />
							Featured
						</InlineFont>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/2023/events">
						<InlineFont>
							<FaRegCalendarDays />
							Events
						</InlineFont>
					</Link>
				</NavbarItem>
			</NavbarContent> */}
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="/2023/signin"
						variant="shadow"
					>
						Sign In
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>

		// <motion.nav
		// 	id="home-nav"
		// 	animate={{
		// 		opacity: [0, 1],
		// 		transition: {
		// 			duration: 1,
		// 			delay: 2,
		// 		},
		// 	}}
		// 	className="w-screen fixed p-2 border-t-4 border-panelBg border-solid z-20 flex justify-between font-bold backdrop-blur"
		// >
		// 	<Link href="/" className="flex justify-center items-center">
		// 		<div className="relative h-8 w-16">
		// 			<Image
		// 				src="/2023/media/img/logo/FIT_ACM.png"
		// 				alt="FEU Tech ACM Logo"
		// 				layout={"fill"}
		// 				objectFit={"contain"}
		// 				className="m-auto"
		// 			></Image>
		// 		</div>
		// 		<p className="font-bold text-xl hover:text-accents transition-colors">
		// 			FEU&nbsp;Tech&nbsp;ACM
		// 		</p>
		// 	</Link>
		// 	<div
		// 		className={`${
		// 			isOpen
		// 				? "fixed w-screen h-screen justify-center flex-col flex items-center bg-bg top-0 left-0 z-10"
		// 				: "hidden"
		// 		} md:flex md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-between`}
		// 	>
		// 		{links.map((link) => {
		// 			return (
		// 				<Sound
		// 					key={link.name}
		// 					events={{
		// 						onMouseEnter: {
		// 							path: "/2023/media/sfx/gun_cocking_short.mp3",
		// 							isLooped: false,
		// 						},
		// 						onClick: {
		// 							path: "/2023/media/sfx/gun_shot.mp3",
		// 							isLooped: false,
		// 						},
		// 					}}
		// 					className={`${
		// 						isOpen && "w-full text-center"
		// 					} hover:text-accents transition-colors cursor-pointer flex`}
		// 				>
		// 					<Link
		// 						href={`/2023${link.href}`}
		// 						className="font-bold text-xl w-full p-2"
		// 						onClick={() => dispatch(toggleNav())}
		// 					>
		// 						{link.name}
		// 					</Link>
		// 				</Sound>
		// 			);
		// 		})}
		// 	</div>
		// 	<div className="flex md:hidden z-10">
		// 		<button onClick={() => dispatch(toggleNav())}>
		// 			{isOpen ? (
		// 				<>
		// 					<svg
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						className="h-10 w-10 text-accents hover:text-accentsDark transition-colors"
		// 						fill="none"
		// 						viewBox="0 0 24 24"
		// 						stroke="currentColor"
		// 					>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth="3"
		// 							d="M6 18L18 6M6 6l12 12"
		// 						/>
		// 					</svg>
		// 				</>
		// 			) : (
		// 				<>
		// 					<svg
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						className="h-10 w-10 text-accents hover:text-accentsDark transition-colors"
		// 						fill="none"
		// 						viewBox="0 0 24 24"
		// 						stroke="currentColor"
		// 					>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth="3"
		// 							d="M4 6h16M4 12h16M4 18h16"
		// 						/>
		// 					</svg>
		// 				</>
		// 			)}
		// 		</button>
		// 	</div>
		// </motion.nav>
	);
};

export default Nav;
