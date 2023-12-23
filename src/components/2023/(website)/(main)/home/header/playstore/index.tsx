import Image from "next/image";
const PlayStore: React.FC = () => {
	return (
		<section id="playstore" className=" fixed bottom-0 left-0">
			<a href="https://play.google.com/store/apps/details?id=app.vercel.acmx.twa">
				<Image
					src={"/media/google-play-badge.png"}
					alt="Google Play Badge"
					height={96}
					width={200}
				></Image>
			</a>
		</section>
	);
};

export default PlayStore;
