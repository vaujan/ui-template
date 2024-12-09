import NavItem from "../components/NavItem";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "Components/NavItem",
	component: NavItem,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<div className="p-lg bg-gray-950">
					<Story />
				</div>
			</BrowserRouter>
		),
	],
	argTypes: {
		iconName: {
			control: "select",
			options: ["Home01", "LayoutAlt02", "Palette", "Settings01", "User01"],
			description: "Name of the Untitled UI icon to use",
		},
	},
};

export const Default = {
	args: {
		children: "Home",
		to: "/",
		iconName: "Home01",
	},
};

export const WithoutIcon = {
	args: {
		children: "No Icon",
		to: "/",
	},
};
