import FadeIn from "@/components/_framer/fadeIn";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleSound } from "@/utils/redux/slices/(website)/music";
import {
	toggleFeatured,
	toggleSoundPrompt,
} from "@/utils/redux/slices/(website)/prompt";
import { motion } from "framer-motion";
import Image from "next/image";
const Prompt: React.FC = () => {
	const { isSoundPromptShown, isFeaturedShown } = useAppSelector(
		(state) => state.initialPromptReducer,
	);
	const dispatch = useAppDispatch();
	return (
		<motion.section
			className={`${
				isFeaturedShown || isSoundPromptShown
					? "w-screen h-screen fixed z-20 bg-bg"
					: "hidden"
			}`}
		>
			<div className="w-full h-full flex justify-center items-center flex-col gap-1">
				<FadeIn
					className=" h-20 w-32 relative"
					props={{
						duration: 1,
						delay: 0.5,
					}}
				>
					<Image
						src="/media/img/logo/FIT_ACM.png"
						alt="FEU Tech ACM Logo"
						layout={"fill"}
						objectFit={"contain"}
						className="m-auto"
					></Image>
				</FadeIn>
				<FadeIn
					props={{
						duration: 1,
						delay: 1,
					}}
					className="text-center"
				>
					<p className="text-2xl">Audio will be played on this site.</p>
					<p>Allow audio to be played?</p>
					<FadeIn
						props={{
							duration: 1,
							delay: 1.5,
						}}
						className="flex gap-2"
					>
						<button
							className="bg-green-500 text-white p-2 rounded-md w-full"
							onClick={() => {
								dispatch(toggleSound());
								dispatch(toggleSoundPrompt());
								dispatch(toggleFeatured());
							}}
						>
							Cool!
						</button>
						<button
							className="bg-red-500 text-white p-2 rounded-md w-full"
							onClick={() => {
								dispatch(toggleSoundPrompt());
							}}
						>
							Nope!
						</button>
					</FadeIn>
				</FadeIn>
			</div>
		</motion.section>
	);
};

export default Prompt;
