import Input from "../components/Input";

export default {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		label: "Label",
		supportingText: "This is a hint text to help user.",
	},
};
