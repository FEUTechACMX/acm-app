import Image from "next/image";
import { motion } from "framer-motion";
const HomePlayStore: React.FC = () => {
	return (
		<motion.section
			id="playstore"
			animate={{
				opacity: [0, 1],
				transition: {
					duration: 1,
					delay: 2,
				},
			}}
			className="flex flex-col justify-center align-middle items-center fixed bottom-0 left-0"
		>
			<a
				href="https://apps.microsoft.com/detail/9NN45TR81J26?launch=true
	&mode=mini"
			>
				<Image
					src={"/media/badge/amazon-appstore.png"}
					width={176}
					height={96}
					alt="Amazon App Badge"
				/>
			</a>
			<a href="https://play.google.com/store/apps/details?id=app.vercel.acmx.twa">
				<Image
					src={"/media/badge/google-play.png"}
					alt="Google Play Badge"
					height={96}
					width={200}
				></Image>
			</a>
			<a
				href="https://apps.microsoft.com/detail/9NN45TR81J26?launch=true
	&mode=mini"
				className="hidden sm:block"
			>
				<Image
					src={"/media/badge/microsoft-store.svg"}
					width={176}
					height={96}
					alt="Microsoft Store Badge"
				/>
			</a>
		</motion.section>
	);
};

export default HomePlayStore;
