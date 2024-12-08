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

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
	hierarchy: "tertiaryGray",
};

export const TertiaryColor = Template.bind({});
TertiaryColor.args = {
	hierarchy: "tertiaryColor",
};

export const LinkGray = Template.bind({});
LinkGray.args = {
	hierarchy: "linkGray",
};

export const LinkColor = Template.bind({});
LinkColor.args = {
	hierarchy: "linkColor",
};
