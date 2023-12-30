import { displaySocials } from "@/utils/socials/displaySocial";

const LayoutShare: React.FC = () => {
	return (
		<section className="p-2">
			<div className="flex flex-col items-center justify-center">
				<p className="font-bold">Share</p>
				<div className="flex flex-col gap-1">{displaySocials(40)}</div>
			</div>
		</section>
	);
};

export default LayoutShare;
