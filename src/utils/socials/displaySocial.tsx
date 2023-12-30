import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaLinkedinIn,
	FaSquareFacebook,
	FaSquareYoutube,
	FaTiktok,
	FaTwitter,
} from "react-icons/fa6";
import LinkProps from "types/LinkProps";

type socialName =
	| "Facebook"
	| "YouTube"
	| "LinkedIn"
	| "Twitter"
	| "Instagram"
	| "TikTok"
	| "GitHub";

const socials = new Map<socialName, LinkProps>([
	[
		"Facebook",
		{
			name: "Facebook",
			href: "https://www.facebook.com/sharer/sharer.php?u=https%3A//feutech.acm.org",
			icon: FaSquareFacebook,
		},
	],
	[
		"YouTube",
		{
			name: "YouTube",
			href: "https://www.youtube.com/@ACMFIT",
			icon: FaSquareYoutube,
		},
	],
	[
		"LinkedIn",
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//feutech.acm.org",
			icon: FaLinkedin,
		},
	],
	[
		"Twitter",
		{
			name: "Twitter",
			href: "https://twitter.com/FEUTechACM",
			icon: FaTwitter,
		},
	],
	[
		"Instagram",
		{
			name: "Instagram",
			href: "https://www.instagram.com/feutechacm/",
			icon: FaInstagram,
		},
	],
	[
		"TikTok",
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@feutechacm",
			icon: FaTiktok,
		},
	],
	[
		"LinkedIn",
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/feutechacm/",
			icon: FaLinkedinIn,
		},
	],
	[
		"GitHub",
		{
			name: "GitHub",
			href: "https://github.com/FEU-Tech-ACM-Student-Chapter",
			icon: FaGithub,
		},
	],
]);

export function displaySocial(
	name: socialName,
	iconSize: number = 50,
): JSX.Element {
	const social = socials.get(name);
	if (!social) throw new Error(`Social ${name} does not exist`);
	const IconComponent = social.icon;
	if (!IconComponent) throw new Error(`Icon for ${name} does not exist`);
	return (
		<a
			href={social.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconComponent size={iconSize} />
		</a>
	);
}

export function displaySocials(iconSize: number = 50): JSX.Element[] {
	const socialsArray = Array.from(socials.values());
	return socialsArray.map((social) =>
		displaySocial(social.name as socialName, iconSize),
	);
}
