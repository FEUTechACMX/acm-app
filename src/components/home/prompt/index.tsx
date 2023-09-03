import { motion } from "framer-motion";
import Image from "next/image";
const Prompt: React.FC = () => {
	return (
		<motion.section className="w-screen h-screen fixed z-20 bg-bg">
			<div className="w-full h-full flex justify-center items-center flex-col gap-1">
				<motion.div
					animate={{
						opacity: [0, 1],
						transition: {
							duration: 1,
							delay: 0.5,
						},
					}}
					className="h-28 w-64 relative"
				>
					<Image
						src="/media/img/logo/FIT_ACM.png"
						alt="FEU Tech Logo"
						layout={"fill"}
						objectFit={"contain"}
						className="m-auto"
					></Image>
				</motion.div>
				<p>このサイトで音声が流れます。</p>
				<p>再生しますか？</p>
			</div>
		</motion.section>
	);
};

export default Prompt;
