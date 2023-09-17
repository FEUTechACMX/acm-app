"use client";
import { motion } from "framer-motion";
import Music from "./music";
import Share from "./share";

const Side: React.FC = () => {
	return (
		<motion.section
			animate={{
				opacity: [0, 1],
				transition: {
					duration: 1,
					delay: 2,
				},
			}}
			className="flex flex-col fixed bottom-0 md:bottom-1/4 right-0 z-10"
		>
			<button className="text-lg text-center">
				<Music
					events={{
						onClick: {
							path: "/media/music/dynasty.mp3",
							isLooped: true,
						},
					}}
				>
					--Music--
				</Music>
			</button>
			<Share />
		</motion.section>
	);
};

export default Side;
