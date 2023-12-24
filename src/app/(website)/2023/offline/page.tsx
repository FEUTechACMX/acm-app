import { NextPage } from "next";
const Offline: NextPage = () => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center text-center fixed top-0 left-0">
			<h1>Notice - Network Offline</h1>
			<p>⚠️ Please check your internet connection ⚠️</p>
			<p>ACM-X will automatically reload the page when you are back online!</p>
		</div>
	);
};

export default Offline;
