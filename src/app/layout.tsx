import NextAuthProvider from "@/components/2023/(app)/provider";
import { ReduxProviders } from "@/utils/redux/provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
const metaData = {
	app_name: "FEU Tech ACM-X",
	title: "FEU Tech ACM-X | Coding Chaos In Digital Dystopia",
	url: process.env.HOST_URL,
	description:
		"The FEU Tech ACM Organization's official cross-platform application developed to serve as the central platform for communication, collaboration, and promotion of every ACM member and officer in education, opportunities, and beyond.",
	iconURL: "https://acmx.vercel.app/android-chrome-512x512.png",
};
const { app_name, url, description, title, iconURL } = metaData;
export const metadata: Metadata = {
	appleWebApp: {
		capable: true,
	},
	applicationName: app_name,
	appLinks: {
		android: {
			app_name,
			class: "",
			package: "",
			url: "",
		},
		ios: {
			app_name,
			app_store_id: "",
			url: "",
		},
		ipad: {
			app_name,
			app_store_id: "",
			url: "",
		},
		iphone: {
			app_name,
			app_store_id: "",
			url: "",
		},
		web: {
			should_fallback: false,
			url: "https://acmx.vercel.app",
		},
		windows: {
			app_name,
			app_id: "",
			url: "",
		},
		windows_phone: {
			app_name,
			app_id: "",
			url: "",
		},
		windows_universal: {
			app_name,
			app_id: "",
			url: "",
		},
	},
	// NOTE: Do not enable this. It will display a white screen.
	// assets: "",
	authors: [
		{
			name: "Abraham Magpantay",
			url: "https://www.linkedin.com/in/aber-magpantay/",
		},
		{
			name: "Alpha Romer Coma",
			url: "https://www.linkedin.com/in/alpha-coma/",
		},
		{
			name: "Guennevere Rito",
			url: "https://www.linkedin.com/in/guennevere-rito-990256255/",
		},
		{
			name: "Emily Tan Sanchez",
		},
	],
	category: "Technology",
	classification: "Technology",
	colorScheme: "dark",
	creator: "FEU Tech ACM Student Chapter",
	description,
	formatDetection: {
		telephone: false,
	},
	icons: [
		{ rel: "icon", url: iconURL },
		{ rel: "apple-touch-icon", url: iconURL },
	],
	keywords:
		"FEU Tech, ACM, Student Chapter, FEU Tech ACM, FEU Tech ACM Student Chapter, Application, Web Application, FEU Tech ACM-X, FEU Tech ACM-X Application, FEU Tech ACM-X Web Application, FEU Tech ACM-X Web Application",
	manifest: "/manifest.webmanifest",
	// metadataBase: "https://acmx.vercel.app",
	openGraph: {
		description,
		images: [
			{
				url: "/media/img/dp_cover/cover.png",
			},
		],
		siteName: app_name,
		title,
		type: "website",
		url,
	},
	robots: "index, follow",
	themeColor: "#0b001a",
	title,
	twitter: {
		card: "summary_large_image",
		site: "@feutechacm",
		creator: "@feutechACM",
		images: "/media/img/dp_cover/cover.png",
	},
	verification: {
		google: "c631ed2b9ed775b4",
	},
	viewport: {
		initialScale: 1,
		interactiveWidget: "resizes-visual",
		maximumScale: 1,
		minimumScale: 1,
		userScalable: false,
		width: "device-width",
	},
};
interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<NextAuthProvider>
				<ReduxProviders>
					{children}
					<Analytics />
				</ReduxProviders>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
