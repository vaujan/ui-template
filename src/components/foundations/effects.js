export const effects = {
	shadows: {
		xs: "0 1px 2px rgba(16,24,40,0.05)",
		sm: ["0 1px 2px rgba(16,24,40,0.06)", "0 1px 3px rgba(16,24,40,0.1)"],
		md: ["0 2px 4px rgba(16,24,40,0.06)", "0 4px 8px rgba(16,24,40,0.1)"],
		lg: ["0 4px 6px rgba(16,24,40,0.03)", "0 12px 16px rgba(16,24,40,0.08)"],
		xl: ["0 8px 8px rgba(16,24,40,0.03)", "0 20px 24px rgba(16,24,40,0.08)"],
		"2xl": "0 24px 48px rgba(16,24,40,0.18)",
		"3xl": "0 32px 64px rgba(16,24,40,0.14)",
	},
	focusRings: {
		base: ["0 0 0 rgba(119,168,237,1)", "0 0 0 rgba(255,255,255,1)"],
		light: [
			"0 0 0 rgba(119,168,237,1)",
			"0 0 0 rgba(255,255,255,1)",
			"0 1px 2px rgba(16,26,40,0.05)",
		],
		dark: [
			"0 0 0 rgba(119,168,237,1)",
			"0 0 0 rgba(13,18,28,1)",
			"0 1px 2px rgba(16,26,40,0.05)",
		],
		error: ["0 0 0 rgba(240,68,56,1)", "0 0 0 rgba(255,255,255,1)"],
		errorXs: ["0 0 0 rgba(240,68,56,1)", "0 0 0 rgba(255,255,255,1)"],
	},
	backdropBlurs: {
		xs: "2px",
		sm: "4px",
		md: "8px",
		lg: "12px",
		xl: "16px",
	},
};
