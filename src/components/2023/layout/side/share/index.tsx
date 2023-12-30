import { displayShareSocial } from "@/utils/socials/shareSocial";
const LayoutShare: React.FC = () => {
	return (
		<section className="p-2 hidden sm:block ">
			<div className="flex flex-col items-center justify-center">
				<p className="font-bold">Share</p>
				<div className="flex flex-col gap-1">
					{displayShareSocial("Facebook", 50)}
					{displayShareSocial("Twitter", 50)}
					{displayShareSocial("LinkedIn", 50)}
				</div>
			</div>
		</section>
	);
};

export default LayoutShare;
