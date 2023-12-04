import FadeIn from "@/components/2023/(website)/(main)/_framer/fadeIn";
import { toggleSound } from "@/components/2023/(website)/(main)/_gen/sound";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import {
	toggleFeatured,
	toggleSoundPrompt,
} from "@/utils/redux/slices/(website)/prompt";
import { motion } from "framer-motion";
import ACMImage from "../../_gen/image/acm";
import Loading from "@/app/2023/(website)/(main)/loading";
import { Suspense } from "react";

const Prompt: React.FC = () => {
	const { isSoundPromptShown, isFeaturedShown } = useAppSelector(
		(state) => state.initialPromptReducer,
	);
	const dispatch = useAppDispatch();
	return (
		<Suspense fallback={<Loading />}>
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
						<ACMImage />
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
									dispatch(toggleFeatured());
								}}
							>
								Nope!
							</button>
						</FadeIn>
					</FadeIn>
				</div>
			</motion.section>
		</Suspense>
	);
};

export default Prompt;