import Site2023LayoutNav from "@/components/2023/layout/nav";
import Site2023LayoutSide from "@/components/2023/layout/side";
import ChildrenProps from "types/ChildrenProps";
const Site2023Layout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<Site2023LayoutNav />
			<Site2023LayoutSide />
			{children}
		</>
	);
};

export default Site2023Layout;
