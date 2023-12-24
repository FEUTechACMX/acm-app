import { FaLinkedin, FaSquareFacebook, FaSquareYoutube } from "react-icons/fa6";
import LinkProps from "types/LinkProps";
const socials: LinkProps[] = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/sharer/sharer.php?u=https%3A//feutech.acm.org",
		icon: <FaSquareFacebook size={50} />,
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/@ACMFIT",
		icon: <FaSquareYoutube size={50} />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//feutech.acm.org",
		icon: <FaLinkedin size={50} />,
	},
];
const LayoutShare: React.FC = () => {
	return (
		<section className="p-2">
			<div className="flex flex-col items-center justify-center">
				<p className="font-bold">Share</p>
				<div className="flex flex-col">
					{socials.map((social, index) => (
						<a
							key={index}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default LayoutShare;
