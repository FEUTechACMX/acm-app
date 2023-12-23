import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LinkProps } from "types/link";
const socials: LinkProps[] = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/sharer/sharer.php?u=https%3A//feutech.acm.org",
		icon: <FaSquareFacebook size={50} />,
	},
	{
		name: "YouTube",
		href: "https://twitter.com/intent/tweet?text=Explore%20the%20latest%20in%20tech%20trends,%20research,%20and%20innovation.%20From%20software%20engineering%20to%20data%20science,%20we've%20got%20it%20all!%20%F0%9F%92%BB%F0%9F%9A%80%0A%0AJoin%20us%20on%20the%20journey%20of%20tech%20excellence.%20Visit%20our%20website%20now%20and%20stay%20updated%20with%20the%20future%20of%20technology!%20%F0%9F%8C%9F%20%23TechInnovation%20%23ACM%20%23FEUTech",
		icon: <FaSquareYoutube size={50} />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//feutech.acm.org",
		icon: <FaLinkedin size={50} />,
	},
];
const Share: React.FC = () => {
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

export default Share;
