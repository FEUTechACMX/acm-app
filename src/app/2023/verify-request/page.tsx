import CenterComponent from "@/components/2023/_gen/center/HomeCenter";
import { NextPage } from "next";
const VerifyRequest: NextPage = () => {
	return (
		<CenterComponent>
			<h1>Check your email</h1>
			<p>A sign in link has been sent to your email address.</p>
			<p>Note: Check your spam folder if you haven&apos;t receive it yet</p>
		</CenterComponent>
	);
};

export default VerifyRequest;
