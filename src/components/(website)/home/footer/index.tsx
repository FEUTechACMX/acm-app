import Image from "next/image";
// import { LinkProps } from "types/link";
// const links: LinkProps[] = [
// 	{
// 		name: "facebook",
// 		href: "",
// 	},
// 	{
// 		name: "twitter",
// 		href: "",
// 	},
// 	{
// 		name: "instagram",
// 		href: "",
// 	},
// 	{
// 		name: "linkedin",
// 		href: "",
// 	},
// 	{
// 		name: "youtube",
// 		href: "",
// 	},
// 	{
// 		name: "github",
// 		href: "",
// 	},
// 	{
// 		name: "tiktok",
// 		href: "",
// 	},
// ];
const Footer: React.FC = () => {
	return (
		<footer id="contact" className="w-screen p-8">
			<div className="grid lg:grid-cols-2 gap-3">
				<div className="">
					<div className="relative h-16 w-32">
						<Image
							src="/media/img/logo/FIT_ACM.png"
							alt="FEU Tech ACM Logo"
							layout={"fill"}
							objectFit={"contain"}
						></Image>
					</div>
					<p className="font-ot text-xs">
						FEU Institute of Technology Association for Computing Machinery
						Student Chapter
					</p>
				</div>
				<div>
					<h2 className="font-hae text-4xl">Contact Us</h2>
					<h3 className="font-hae text-3xl">Address</h3>
					<p>P. Paredes St. Sampaloc, Manila, Philippines, 1015</p>
					<h3 className="font-hae text-3xl">Email Address</h3>
					<p>acm.feu.it@gmail.com</p>
				</div>
			</div>
			<p className="text-center">
				Copyright © 2023 FEU Tech ACM Student Chapter. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
