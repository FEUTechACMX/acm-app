import { motion } from "framer-motion";
const TypingEffect: React.FC = () => {
	const line1 = "FEU Tech ACM Student Chapter";
	const line2 = "<Coding Chaos In Digital Dystopia />";

	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const line1Array = line1.split("");
	const line2Array = line2.split("");

	return (
		<div className="flex flex-col justify-center items-center">
			<motion.h1
				variants={sentence}
				initial="hidden"
				animate="visible"
				className="font-ot [text-wrap:balance] text-center text-panelColor"
			>
				{line1Array.map((char, index) => {
					return (
						<motion.span key={index} variants={letter}>
							{char}
						</motion.span>
					);
				})}
			</motion.h1>
			<motion.h2
				variants={sentence}
				initial="hidden"
				animate="visible"
				className="font-hae text-4xl"
			>
				{line2Array.map((char, index) => {
					return (
						<motion.span key={index} variants={letter}>
							{char}
						</motion.span>
					);
				})}
			</motion.h2>
		</div>
	);
};

export default TypingEffect;
