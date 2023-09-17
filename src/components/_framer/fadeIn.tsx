import { motion } from "framer-motion";
interface Props {
	children: React.ReactNode;
	props?: {
		duration?: number;
		delay?: number;
	};
}
const FadeIn: React.FC<Props> = ({ children, props }) => {
	const { duration, delay } = props || { duration: 1, delay: 0.5 };
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
				transition: {
					duration,
					delay,
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
