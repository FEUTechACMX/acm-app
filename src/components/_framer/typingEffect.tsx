import { motion } from "framer-motion";
interface Props {
	props: {
		str: string;
	};
}
const TypingEffect: React.FC<Props> = ({ props: { str } }) => {
	const strArr = str.split("");
	const sentence = {
		hidden: { opacity: 1, transition: {} },
		visible: {
			opacity: 1,
			transition: {
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

	return (
		<motion.span variants={sentence} initial="hidden" animate="visible">
			{strArr.map((char, index) => {
				return (
					<motion.span key={index} variants={letter}>
						{char}
					</motion.span>
				);
			})}
		</motion.span>
	);
};

export default TypingEffect;
