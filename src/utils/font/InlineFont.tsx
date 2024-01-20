import ChildrenProps from "types/ChildrenProps";
const InlineFont: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<span className="flex justify-center items-center gap-1">{children}</span>
	);
};

export default InlineFont;
