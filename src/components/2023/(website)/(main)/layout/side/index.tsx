"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { motion } from "framer-motion";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import Sound from "./music";
import Share from "./share";
const Side: React.FC = () => {
	const { isSoundAllowed } = useAppSelector((state) => state.soundReducer);
	// const ref = useRef<HTMLButtonElement>(null);
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
				<Sound
					events={{
						onClick: {
							path: "/2023/media/music/dynasty.mp3",
							isLooped: true,
						},
					}}
					autoPlay={isSoundAllowed}
				>
					{isSoundAllowed ? (
						<FaVolumeHigh size={40} />
					) : (
						<FaVolumeXmark size={40} />
					)}
				</Sound>
			</button>
			<Share />
		</motion.section>
	);
};

export default Side;
