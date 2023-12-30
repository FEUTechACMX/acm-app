import { Social, getSocial } from "./partialSocial";

export const socialShare = new Map<socialName, Social>([
	[
		"Facebook",
		{
			...getSocial("Facebook"),
			href: "https://www.facebook.com/sharer/sharer.php?u=https%3A//acmx.vercel.app",
		},
	],
	[
		"LinkedIn",
		{
			...getSocial("LinkedIn"),
			href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//acmx.vercel.app",
		},
	],
	[
		"Twitter",
		{
			...getSocial("Twitter"),
			href: "https://twitter.com/share?text=Hello%20World%20from%20ACM-X%20App&url=https%3A//acmx.vercel.app&hashtags=feutechacm,acmx,app",
		},
	],
]);
// Type error due to Regex if Omit is used
type socialName = "Facebook" | "LinkedIn" | "Twitter";
export function displayShareSocial(
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
