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
			className="flex flex-col fixed bottom-1/4 right-0 z-10"
		>
			<Music />
			<Share />
		</motion.section>
	);
};

export default Side;
