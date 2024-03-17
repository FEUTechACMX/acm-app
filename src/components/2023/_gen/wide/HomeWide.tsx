import ChildrenProps from "types/ChildrenProps";
const HomeWide: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<div className="w-full h-auto p-8 md:p-12">
			<div className="flex text-xl md:text-2xl text-justify justify-center items-center gap-6 flex-col h-full lg:w-9/12 m-auto">
				{children}
			</div>
		</div>
	);
};

export default HomeWide;
