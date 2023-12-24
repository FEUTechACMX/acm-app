import { motion } from "framer-motion";
import ChildrenProps from "types/ChildrenProps";
interface Props extends ChildrenProps {
	props?: {
		duration?: number;
		delay?: number;
	};
	className?: string;
}
const FadeIn: React.FC<Props> = ({ children, props, className }) => {
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
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
