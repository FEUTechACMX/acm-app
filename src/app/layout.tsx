import NextAuthProvider from "@/components/app/NextAuthProvider";
import { env } from "@/server/env";
import { ReduxProviders } from "@/utils/redux/provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Viewport } from "next";
import localFont from "next/font/local";
const font_f1s = localFont({
	src: [
		{
			path: "../../public/2023/fonts/f1-secuencia-quad-ffp/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-f1s",
});
const font_hae = localFont({
	src: [
		{
			path: "../../public/2023/fonts/human-alter-ego/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-hae",
});

const font_ot = localFont({
	src: [
		{
			path: "../../public/2023/fonts/over-there/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-ot",
});

import "src/styles/2023/style.css"; // <- Notice this for the next year's website
import "src/styles/globals.css";
import ChildrenProps from "types/ChildrenProps";
import NextUIProv from "./provider";
const metaData = {
	app_name: "FEU Tech ACM-X",
	title: "FEU Tech ACM-X | Coding Chaos In Digital Dystopia",
	url: env.HOST_URL,
	description:
		"The FEU Tech ACM Organization's official cross-platform application developed to serve as the central platform for communication, collaboration, and promotion of every ACM member and officer in education, opportunities, and beyond.",
	iconURL: "https://acmx.vercel.app/android-chrome-512x512.png",
	emails: ["acm.feu.it@gmail.com"],
};
const { app_name, url, description, title, iconURL, emails } = metaData;

export const viewport: Viewport = {
	themeColor: "#0b001a",
	colorScheme: "dark",
	viewportFit: "cover",
	interactiveWidget: "resizes-visual",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	userScalable: false,
	width: "device-width",
};

export const metadata: Metadata = {
	appleWebApp: {
		capable: true,
	},
	applicationName: app_name,
	appLinks: {
		android: {
			app_name,
			class: "app",
			package: "app.vercel.acmx.twa",
			url: "https://play.google.com/store/apps/details?id=app.vercel.acmx.twa",
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
	generator: "FEU Tech ACM-X",
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
		"FEU Tech, ACM, Student Chapter, FEU Tech ACM, FEU Tech ACM Student Chapter, Application, Web Application, FEU Tech ACM-X, FEU Tech ACM-X Application, FEU Tech ACM-X Web Application, FEU Tech ACM-X Web Application, Official Application, Google Play Store, Website",
	manifest: "/manifest.webmanifest",
	metadataBase: new URL("https://acmx.vercel.app"),
	openGraph: {
		description,
		images: [
			{
				url: "/2023/media/img/dp_cover/cover.png",
			},
		],
		siteName: app_name,
		title,
		type: "website",
		url,
		emails,
	},
	robots: {
		follow: true,
		index: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	title,
	publisher: "FEU Tech ACM Student Chapter",
	referrer: "no-referrer",
	twitter: {
		card: "summary_large_image",
		site: "@feutechacm",
		creator: "@feutechACM",
		images: "/2023/media/img/dp_cover/cover.png",
	},
	verification: {
		google: "c631ed2b9ed775b4",
		yandex: "568d1a736ad86d8a",
		yahoo: "E01A119E5EAA9A5963570A31EA4A5058",
		me: "feutechacm",
	},
};

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<html lang="en">
			<NextAuthProvider>
				<ReduxProviders>
					<NextUIProv>
						<body
							className={`${font_f1s.variable} ${font_hae.variable} ${font_ot.variable} text-base sm:text-lg lg:text-xl`}
						>
							{children}
						</body>
					</NextUIProv>
					<Analytics />
					<SpeedInsights />
				</ReduxProviders>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
