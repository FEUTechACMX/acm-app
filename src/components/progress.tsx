"use client";
import NextNProgress from "nextjs-progressbar";

const NextNProgressClient = () => {
	return (
		<NextNProgress
			color={"#fff"}
			transformCSS={(css) => {
				return <style>{css.replace("top: 15px;", "bottom: 15px;")}</style>;
			}}
		/>
	);
};

export default NextNProgressClient;
