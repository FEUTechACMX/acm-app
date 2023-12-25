import { NextPage } from "next";
import CenterComponent from "@/components/2023/_gen/center/HomeCenter";
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
