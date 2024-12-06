import Button from "../components/Button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	hierarchy: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	hierarchy: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	hierarchy: "tertiary",
};
