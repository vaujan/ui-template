import { colors } from "./src/components/foundations/colors.js";
import { typography } from "./src/components/foundations/typography.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			base: colors.base,
			gray: colors.gray,
			brand: colors.brand,
		},
		fontSize: {
			"5xl": [typography.display["2xl"].regular, { lineHeight: "1.2" }],
			"4xl": [typography.display.xl.regular, { lineHeight: "1.2" }],
			"3xl": [typography.display.lg.regular, { lineHeight: "1.2" }],
			"2xl": [typography.display.md.regular, { lineHeight: "1.2" }],
			xl: [typography.display.sm.regular, { lineHeight: "1.2" }],
			lg: [typography.text.xl.regular, { lineHeight: "1.5" }],
			md: [typography.text.lg.regular, { lineHeight: "1.5" }],
			base: [typography.text.md.regular, { lineHeight: "1.5" }],
			sm: [typography.text.sm.regular, { lineHeight: "1.5" }],
			xs: [typography.text.xs.regular, { lineHeight: "1.5" }],
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
		},
	},
	plugins: [],
};
