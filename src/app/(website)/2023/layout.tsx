import Nav from "@/components/2023/(website)/(main)/layout/nav";
import Side from "@/components/2023/(website)/(main)/layout/side";
import ChildrenProps from "types/ChildrenProps";
const Layout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<Nav />
			<Side />
			{children}
		</>
	);
};

export default Layout;
