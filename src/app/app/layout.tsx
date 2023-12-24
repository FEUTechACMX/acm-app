import AppLayoutNav from "@/components/app/layout/nav";
import ChildrenProps from "types/ChildrenProps";
const AppLayout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<AppLayoutNav />
			{children}
		</>
	);
};

export default AppLayout;
