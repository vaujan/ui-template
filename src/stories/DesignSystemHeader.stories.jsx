import DesignSystemHeader from "../components/DesignSystemHeader";

export default {
	title: "Components/DesignSystemHeader",
	component: DesignSystemHeader,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		children: "Buttons",
		supportingText: "Buttons communicate actions that users can take.",
		componentPath: "Components",
	},
};
