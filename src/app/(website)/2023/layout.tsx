import LayoutNav from "@/components/(website)/2023/layout/nav";
import LayoutSide from "@/components/(website)/2023/layout/side";
import ChildrenProps from "types/ChildrenProps";
const Layout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<LayoutNav />
			<LayoutSide />
			{children}
		</>
	);
};

export default Layout;
