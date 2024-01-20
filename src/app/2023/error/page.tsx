import CenterComponent from "@/components/wrapper/CenterComponent";
import { NextPage } from "next";
const SigninError: NextPage = () => {
	return (
		<CenterComponent>
			<h1>Error 401: Unauthorized</h1>
		</CenterComponent>
	);
};

export default SigninError;
