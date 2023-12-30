// import LinkProps from "types/LinkProps";
import {
	FaGithub,
	FaGlobe,
	FaInstagram,
	FaLinkedin,
	FaLinkedinIn,
	FaSquareFacebook,
	FaSquareYoutube,
	FaTiktok,
	FaTwitter,
} from "react-icons/fa6";
import { LinkPropsElement } from "types/LinkProps";

export interface Social extends LinkPropsElement {
	name: socialName;
}

export type socialName =
	| "Facebook"
	| "YouTube"
	| "LinkedIn"
	| "Twitter"
	| "Instagram"
	| "TikTok"
	| "GitHub"
	| "Website";

export const partialSocials = new Map<socialName, Partial<Social>>([
	[
		"Facebook",
		{
			name: "Facebook",
			icon: FaSquareFacebook,
		},
	],
	[
		"YouTube",
		{
			name: "YouTube",
			icon: FaSquareYoutube,
		},
	],
	[
		"LinkedIn",
		{
			name: "LinkedIn",
			icon: FaLinkedin,
		},
	],
	[
		"Twitter",
		{
			name: "Twitter",
			icon: FaTwitter,
		},
	],
	[
		"Instagram",
		{
			name: "Instagram",
			icon: FaInstagram,
		},
	],
	[
		"TikTok",
		{
			name: "TikTok",
			icon: FaTiktok,
		},
	],
	[
		"LinkedIn",
		{
			name: "LinkedIn",
			icon: FaLinkedinIn,
		},
	],
	[
		"GitHub",
		{
			name: "GitHub",
			icon: FaGithub,
		},
	],
	[
		"Website",
		{
			name: "Website",
			icon: FaGlobe,
		},
	],
]);

export function getSocial(
	name: socialName,
	map: Map<string, Social | Partial<Social>> = partialSocials,
) {
	const s = map.get(name);
	if (!s) throw new Error(`Social ${name} does not exist.`);
	// Type assertion for simplicity
	return s as Social;
}
