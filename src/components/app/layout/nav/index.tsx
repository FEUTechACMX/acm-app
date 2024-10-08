"use client";
import ACMImage from "@/components/2023/_gen/image/ACMImage";
import isActive from "@/components/nav/isActive";
import InlineFont from "@/utils/font/InlineFont";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { closeNav, toggleNav } from "@/utils/redux/slices/app/nav";
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
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
import { usePathname } from "next/navigation";
import { FaBlog } from "react-icons/fa";
import {
	FaBell,
	FaCalendarDays,
	FaGauge,
	FaGlobe,
	FaInbox,
} from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import { LinkPropsNode } from "types/LinkProps";

const links: LinkPropsNode[] = [
	{
		name: "Dashboard",
		href: "/app/dashboard",
		icon: <FaGauge />,
	},
	{
		name: "Forum",
		href: "/app/forum",
		icon: <MdForum />,
	},
	{
		name: "Global Chat",
		href: "/app/global-chat",
		icon: <FaGlobe />,
	},
	{
		name: "Events",
		href: "/app/events",
		icon: <FaCalendarDays />,
	},
	{
		name: "Blog",
		href: "/app/blog",
		icon: <FaBlog />,
	},
	{
		name: "Notifications",
		href: "/app/notifications",
		icon: <FaBell />,
	},
	{
		name: "Inbox",
		href: "/app/inbox",
		icon: <FaInbox />,
	},
];

const AppLayoutNav = () => {
	const isOpen = useAppSelector((state) => state.navReducer.isNavOpen);
	const dispatch = useAppDispatch();
	const { data: session } = useSession();
	const pathname = usePathname();

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
					"data-[active=true]:after:bg-secondary",
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
					<p className="font-bold text-xl hidden md:block">FEU Tech ACM</p>
				</Link>
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{links.map((link) => {
					return (
						<NavbarItem
							key={link.name}
							isActive={isActive({
								href: link.href,
								path: pathname,
							})}
						>
							<Link color="foreground" href={link.href}>
								<InlineFont>
									<span className=" lg:text-base sm:text-2xl">{link.icon}</span>
									<span className="lg:inline sm:hidden">{link.name}</span>
								</InlineFont>
							</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>
			<NavbarMenu>
				{links.map((link) => {
					return (
						<NavbarMenuItem
							isActive={isActive({
								href: link.href,
								path: pathname,
							})}
							key={link.name}
						>
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

			<NavbarContent as="div" justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name={session?.user?.name!}
							size="sm"
							src={session?.user?.image!}
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">{session?.user?.email}</p>
						</DropdownItem>
						<DropdownItem key="my-certificates">My Certificates</DropdownItem>
						<DropdownItem key="analytics">Analytics</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout">
							<Link href="/2023/signout" color="foreground" className="w-full">
								Signout
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};

export default AppLayoutNav;
