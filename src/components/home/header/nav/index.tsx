import Link from "next/link";
interface LinkProps {
	name: string;
	href: string;
}
const links: LinkProps[] = [
	{
		name: "News",
		href: "/news",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Events",
		href: "/events",
	},
	{
		name: "Merch",
		href: "/merch",
	},
	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "Signin",
		href: "/signin",
	},
];
const Nav: React.FC = () => {
	return (
		<nav
			id="home-nav"
			className="w-screen fixed border-t-2 border-panelBg border-solid z-10 flex justify-between"
		>
			<div></div>
			<div className="flex text-lg">
				{links.map((link, index) => {
					return (
						<Link href={link.href} key={index} className="p-3">
							{link.name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
