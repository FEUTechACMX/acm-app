import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
	description: "",
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
		title: "FEU Tech ACM-X",
		type: "website",
		url: "https://feutech.acm.org/",
	},
	robots: "index, follow",
	themeColor: "#0b001a",
	title: "FEU Tech ACM-X",
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
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
