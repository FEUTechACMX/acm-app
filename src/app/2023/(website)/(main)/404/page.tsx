import { NextPage } from "next";
const Error404: NextPage = () => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center text-center">
			<h1>Error 404: Not Found</h1>
			<p>🚧 The website is under development 🚧</p>
			<p>
				For site or project inquiries, contact the{" "}
				<a
					href="mailto:acm.feu.it@gmail.com"
					className="underline"
					target="_blank"
				>
					FEU Tech ACM
				</a>{" "}
				or the{" "}
				<a
					href="mailto:202211383@fit.edu.ph"
					className="underline"
					target="_blank"
				>
					Webmaster
				</a>
			</p>
		</div>
	);
};

export default Error404;
