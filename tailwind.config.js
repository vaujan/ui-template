import { colors } from "./src/components/foundations/colors.js";
import { typography } from "./src/components/foundations/typography.js";
import { spacing } from "./src/components/foundations/spacings.js";
import { radius } from "./src/components/foundations/radius.js";
import { effects } from "./src/components/foundations/effects.js";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			base: colors.base,
			gray: colors.gray,
			brand: colors.brand,
			transparent: "transparent",
		},
		fontSize: {
			// Display scale
			"display-2xl": [typography.display["2xl"].regular, { lineHeight: "1.2" }],
			"display-xl": [typography.display.xl.regular, { lineHeight: "1.2" }],
			"display-lg": [typography.display.lg.regular, { lineHeight: "1.2" }],
			"display-md": [typography.display.md.regular, { lineHeight: "1.2" }],
			"display-sm": [typography.display.sm.regular, { lineHeight: "1.2" }],
			"display-xs": [typography.display.xs.regular, { lineHeight: "1.2" }],
			// Text scale
			"text-xl": [typography.text.xl.regular, { lineHeight: "1.5" }],
			"text-lg": [typography.text.lg.regular, { lineHeight: "1.5" }],
			"text-md": [typography.text.md.regular, { lineHeight: "1.5" }],
			"text-sm": [typography.text.sm.regular, { lineHeight: "1.5" }],
			"text-xs": [typography.text.xs.regular, { lineHeight: "1.5" }],
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
		},
		spacing: spacing,
		borderRadius: radius,
		dropShadow: {
			...effects.shadows,
			"focus-ring": effects.focusRings.base,
			"focus-ring-light": effects.focusRings.light,
			"focus-ring-dark": effects.focusRings.dark,
			"focus-ring-error": effects.focusRings.error,
			"focus-ring-error-xs": effects.focusRings.errorXs,
		},
		backdropBlur: effects.backdropBlurs,
		extend: {},
	},
	plugins: [forms],
};
