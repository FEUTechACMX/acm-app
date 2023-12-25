import CenterComponent from "@/components/2023/_gen/center/HomeCenter";
import { NextPage } from "next";
const Error404: NextPage = () => {
	return (
		<CenterComponent>
			<h1>Error 404: Not&nbsp;Found</h1>
			<p>🚧 The application is under development 🚧</p>
			<p>
				For site inquiries, contact the{" "}
				<a
					href="mailto:acm.feu.it@gmail.com"
					className="underline"
					target="_blank"
				>
					FEU Tech ACM
				</a>{" "}
				or their{" "}
				<a
					href="mailto:202211383@fit.edu.ph"
					className="underline"
					target="_blank"
				>
					Webmaster
				</a>
			</p>
		</CenterComponent>
	);
};

export default Error404;
