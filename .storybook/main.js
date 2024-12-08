/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ["../src/stories/**/*.stories.@(js|jsx)"],
	addons: [
		// "@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		// "@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};
export default config;
