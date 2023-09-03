import { motion } from "framer-motion";
import Image from "next/image";
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
		name: "Committees",
		href: "/committees",
	},
	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "Membership",
		href: "/membership",
	},
	{
		name: "Signin",
		href: "/signin",
	},
];
const Nav: React.FC = () => {
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
			className="w-screen fixed p-2 border-t-2 border-panelBg border-solid z-20 flex justify-between font-bold"
		>
			<div className="flex justify-center items-center">
				<div className="relative h-8 w-16">
					<Image
						src="/media/img/logo/FIT_ACM.png"
						alt="FEU Tech Logo"
						layout={"fill"}
						objectFit={"contain"}
						className="m-auto"
					></Image>
				</div>
				<h2>FEU&nbsp;Tech&nbsp;ACM</h2>
			</div>
			<div className="flex text-lg">
				{links.map((link, index) => {
					return (
						<Link href={link.href} key={index}>
							<p className="p-3 rounded-lg hover:text-accents active:text-accents focus:text-accents transition-colors">
								{link.name}
							</p>
						</Link>
					);
				})}
			</div>
		</motion.nav>
	);
};

export default Nav;
