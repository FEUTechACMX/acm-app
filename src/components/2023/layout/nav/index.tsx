"use client";
import InlineFont from "@/utils/font/InlineFont";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleNav, closeNav } from "@/utils/redux/slices/(website)/nav";
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
import { useSession } from "next-auth/react";
import {
	FaFirstOrder,
	FaHouseChimney,
	FaMedal,
	FaPeopleGroup,
	FaPhone,
	FaRegCalendarDays,
	FaShop,
} from "react-icons/fa6";
import LinkProps from "types/LinkProps";
import ACMImage from "../../_gen/image/ACMImage";
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
const Site2023LayoutNav: React.FC = () => {
	const { data: session, status } = useSession();
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
				<Link href="/" color="foreground" onClick={() => dispatch(closeNav())}>
					<div className="relative h-8 w-16">
						<ACMImage />
					</div>
					<p className="font-bold text-xl hidden sm:block">FEU Tech ACM</p>
				</Link>
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{links.map((link) => {
					return (
						<NavbarItem key={link.name}>
							<Link color="foreground" href={link.href}>
								<InlineFont>
									{link.icon}
									{link.name}
								</InlineFont>
							</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>

			<NavbarMenu>
				{links.map((link) => {
					return (
						<NavbarMenuItem key={link.name}>
							<Link
								href={link.href}
								className="text-2xl w-full"
								color="foreground"
								onClick={() => dispatch(toggleNav())}
							>
								<InlineFont>
									{link.icon}
									{link.name}
								</InlineFont>
							</Link>
						</NavbarMenuItem>
					);
				})}
			</NavbarMenu>
			<NavbarContent justify="end">
				<NavbarItem>
					{status === "loading" ? (
						<p>Loading...</p>
					) : session ? (
						<Button
							as={Link}
							color="primary"
							href="/app/dashboard"
							variant="shadow"
						>
							Dashboard
						</Button>
					) : (
						<Button
							as={Link}
							color="primary"
							href="/2023/signin"
							variant="shadow"
						>
							Sign In
						</Button>
					)}
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Site2023LayoutNav;
