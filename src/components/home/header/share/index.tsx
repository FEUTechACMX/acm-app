interface Social {
	name: string;
	link: string;
}
const socials: Social[] = [
	{
		name: "facebook",
		link: "https://www.facebook.com/sharer/sharer.php?u=https%3A//feutech.acm.org",
	},
	{
		name: "twitter",
		link: "https://twitter.com/intent/tweet?text=Explore%20the%20latest%20in%20tech%20trends,%20research,%20and%20innovation.%20From%20software%20engineering%20to%20data%20science,%20we've%20got%20it%20all!%20%F0%9F%92%BB%F0%9F%9A%80%0A%0AJoin%20us%20on%20the%20journey%20of%20tech%20excellence.%20Visit%20our%20website%20now%20and%20stay%20updated%20with%20the%20future%20of%20technology!%20%F0%9F%8C%9F%20%23TechInnovation%20%23ACM%20%23FEUTech",
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//feutech.acm.org",
	},
];
const Share: React.FC = () => {
	return (
		<section className="p-2">
			<div className="flex flex-col items-center justify-center">
				<p className="font-bold">Share</p>
				{socials.map((social) => {
					return (
						<a
							href={social.link}
							target="_blank"
							rel="noreferrer"
							key={social.name}
							className={`icon-${social.name}-squared text-4xl hover:text-accents transition-colors`}
						></a>
					);
				})}
			</div>
		</section>
	);
};

export default Share;
