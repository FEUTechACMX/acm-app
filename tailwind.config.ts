import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
			textBalance: "text-wrap: balance",
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			prefix: "nextui", // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: "dark", // default theme from the themes object
			defaultExtendTheme: "light", // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {},
					colors: {
						default: "#833fe0",
						primary: "#833fe0",
						background: "#0b001a",
						foreground: "#ffffff",
						divider: "#1f004a",
						overlay: "#833fe0",
						focus: "#833fe0",
						content1: "#833fe0",
						content2: "#833fe0",
						content3: "#833fe0",
						content4: "#833fe0",
					}, // dark theme colors
				},
				dark: {
					layout: {},
					colors: {
						default: "#833fe0",
						primary: "#833fe0",
						background: "#0b001a",
						foreground: "#ffffff",
						divider: "#1f004a",
						overlay: "#833fe0",
						focus: "#833fe0",
						content1: "#833fe0",
						content2: "#833fe0",
						content3: "#833fe0",
						content4: "#833fe0",
					}, // dark theme colors
				},
			},
		}),
	],
};
export default config;
