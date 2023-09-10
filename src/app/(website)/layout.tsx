import Nav from "@/components/(website)/layout/nav";
import Side from "@/components/(website)/layout/side";
import NextNProgressClient from "@/components/progress";
import { Providers } from "@/utils/redux/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "public/media/icons/fontello-84cd01f8/css/fontello.css";
import "../globals.css";
const f_f1s = localFont({
	src: [
		{
			path: "../../../public/fonts/f1-secuencia-quad-ffp/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-f1s",
});
const f_hae = localFont({
	src: [
		{
			path: "../../../public/fonts/human-alter-ego/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-hae",
});

const f_ot = localFont({
	src: [
		{
			path: "../../../public/fonts/over-there/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-ot",
});

export const metadata: Metadata = {
	appleWebApp: {
		capable: true,
	},
	applicationName: "FEU Tech ACM-X",
	appLinks: {
		android: {
			app_name: "",
			class: "",
			package: "",
			url: "",
		},
		ios: {
			app_name: "",
			app_store_id: "",
			url: "",
		},
		ipad: {
			app_name: "",
			app_store_id: "",
			url: "",
		},
		iphone: {
			app_name: "",
			app_store_id: "",
			url: "",
		},
		web: {
			should_fallback: false,
			url: "",
		},
		windows: {
			app_id: "",
			app_name: "",
			url: "",
		},
		windows_phone: {
			app_id: "",
			app_name: "",
			url: "",
		},
		windows_universal: {
			app_id: "",
			app_name: "",
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
	description:
		"FEU Tech ACM Student Chapter is a top-performing academic organization founded in 2007 acting as the mother organization for FEU Institute of Technology Computer Science students.",
	formatDetection: {
		telephone: false,
	},
	icons: [],
	keywords:
		"FEU Tech, ACM, Student Chapter, FEU Tech ACM, FEU Tech ACM Student Chapter, Application, Web Application, FEU Tech ACM-X, FEU Tech ACM-X Application, FEU Tech ACM-X Web Application, FEU Tech ACM-X Web Application",
	manifest: "/manifest.webmanifest",
	// metadataBase: "https://feutech.acm.org/",
	openGraph: {
		description: "My Website Description",
		images: [
			{
				url: "https://feutech.acm.org/",
			},
		],
		siteName: "FEU Tech ACM-X",
		title: "FEU Tech ACM-X | Coding Chaos In Digital Dystopia",
		type: "website",
		url: "https://feutech.acm.org/",
	},
	robots: "index, follow",
	themeColor: "#0b001a",
	title: "FEU Tech ACM-X | Coding Chaos In Digital Dystopia",
	twitter: {},
	verification: {},
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
			<body
				className={`${f_f1s.variable} ${f_hae.variable} ${f_ot.variable} text-base sm:text-lg lg:text-xl`}
			>
				<Providers>
					<NextNProgressClient />
					<>
						<Nav />
						<Side />
						{children}
					</>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
