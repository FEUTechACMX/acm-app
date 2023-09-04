import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				f1s: ["var(--font-f1s)"],
				hae: ["var(--font-hae)"],
				ot: ["var(--font-ot)"],
			},
			colors: {
				bg: "var(--bg)",
				panelBg: "var(--panel-bg)",
				assets: "var(--assets)",
				accents: "var(--accents)",
				text: "var(--text)",
				panelColor: "var(--panel-color)",
			},
			boxShadowColor: {
				panelColor: "var(--panel-color)",
			},
			borderColor: {
				panelBg: "var(--panel-bg)",
			},
		},
	},
	plugins: [],
};
export default config;
