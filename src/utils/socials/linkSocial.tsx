import { Social, getSocial, socialName } from "./partialSocial";

const socialShare = new Map<socialName, Social>([
	[
		"Facebook",
		{
			...getSocial("Facebook"),
			href: "https://www.facebook.com/feutechACM",
		},
	],
	[
		"LinkedIn",
		{
			...getSocial("LinkedIn"),
			href: "https://www.linkedin.com/company/feutechacm/",
		},
	],
	[
		"YouTube",
		{
			...getSocial("YouTube"),
			href: "https://www.youtube.com/@ACMFIT",
		},
	],
	[
		"Twitter",
		{
			...getSocial("Twitter"),
			href: "https://twitter.com/FEUTechACM",
		},
	],
	[
		"Instagram",
		{
			...getSocial("Instagram"),
			href: "https://www.instagram.com/feutechacm/",
		},
	],
	[
		"TikTok",
		{
			...getSocial("TikTok"),
			href: "https://www.tiktok.com/@feutechacm",
		},
	],
	[
		"GitHub",
		{
			...getSocial("GitHub"),
			href: "https://github.com/FEU-Tech-ACM-Student-Chapter",
		},
	],
	[
		"Website",
		{
			...getSocial("Website"),
			href: "https://acmx.vercel.app",
		},
	],
]);
export function displayLinkSocial(
	name: socialName,
	iconSize: number = 50,
): JSX.Element {
	const social = getSocial(name, socialShare);
	const IconComponent = social.icon;
	if (!IconComponent) throw new Error(`Icon for ${name} does not exist`);
	return (
		<a href={social.href} target="_blank" rel="noopener noreferrer" key={name}>
			<IconComponent size={iconSize} />
		</a>
	);
}

export function displaySocials(iconSize: number = 50): JSX.Element[] {
	const socialsArray = Array.from(socialShare.values());
	return socialsArray.map((social) => displayLinkSocial(social.name, iconSize));
}
