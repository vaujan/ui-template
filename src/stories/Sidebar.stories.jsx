import Sidebar from "../pages/Sidebar";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "Pages/Sidebar",
	component: Sidebar,
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
};

export const Default = {
	args: {},
};
