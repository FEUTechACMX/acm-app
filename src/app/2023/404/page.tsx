import CenterComponent from "@/components/wrapper/CenterComponent";
import { NextPage } from "next";
const Error404: NextPage = () => {
	return (
		<CenterComponent>
			<h1 className="text-balance">Error 404: Not Found</h1>
			<p className="text-balance">🚧 The application is under development 🚧</p>
			<p className="text-balance">
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
