import CenterComponent from "@/components/wrapper/CenterComponent";
import { NextPage } from "next";
const Offline: NextPage = () => {
	return (
		<CenterComponent>
			<h1>Notice - Network Offline</h1>
			<p>⚠️ Please check your internet connection ⚠️</p>
			<p>ACM-X will automatically reload the page when you are back online!</p>
		</CenterComponent>
	);
};

export default Offline;
