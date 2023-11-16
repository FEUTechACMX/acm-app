import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@expo23-components/NavBar";
import Footer from "@expo23-components/Footer";
export const metadata: Metadata = {
	title: "CS Expo 2023 2.0",
	description: "", //to follow
};
import Script from "next/script";

import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});
interface Props {
	children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<head>
				{/* GlideJS's two CDN (both required) */}
				<Script
					rel="stylesheet"
					src="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"
				/>

				<Script
					rel="stylesheet"
					src="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css"
				/>
			</head>
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;
