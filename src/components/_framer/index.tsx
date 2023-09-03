import { motion } from "framer-motion";
interface Props {
	children: React.ReactNode;
	props?: {
		duration?: number;
		delay?: number;
	};
}
const FadeInWhenVisible: React.FC<Props> = ({ children, props }) => {
	const { duration, delay } = props || { duration: 1, delay: 0.5 };
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration, delay }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 },
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeInWhenVisible;
