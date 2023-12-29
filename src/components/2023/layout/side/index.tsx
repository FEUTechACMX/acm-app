"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { motion } from "framer-motion";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import LayoutSound from "./music";
import LayoutShare from "./share";
const Site2023LayoutSide: React.FC = () => {
	const { isSoundAllowed } = useAppSelector((state) => state.soundReducer);
	return (
		<motion.section
			animate={{
				opacity: [0, 1],
				transition: {
					duration: 1,
					delay: 2,
				},
			}}
			className="flex flex-col fixed justify-center items-center bottom-0 md:bottom-1/4 right-0 z-10"
		>
			<button>
				<LayoutSound path="/2023/media/music/dynasty.mp3">
					{isSoundAllowed ? (
						<FaVolumeHigh size={40} />
					) : (
						<FaVolumeXmark size={40} />
					)}
				</LayoutSound>
			</button>
			<LayoutShare />
		</motion.section>
	);
};

export default Site2023LayoutSide;
