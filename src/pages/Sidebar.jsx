import NavItem from "../components/NavItem";
import { DotsGrid } from "@untitled-ui/icons-react";

const Sidebar = () => {
	return (
		<aside className="w-[280px] min-h-full p-lg">
			<div className="flex items-center gap-sm mb-2xl">
				<DotsGrid
					className="w-xl h-xl text-brand-600 drop-shadow-[0_0_3px_rgba(46,144,250,0.6)] drop-shadow-[0_0_20px_rgba(46,144,250,0.6)]"
					strokeWidth={1}
				/>
				<span className="text-[1.7rem] font-medium text-gray-50 text-gradient-to-r from-white to-[#707275] bg-clip-text ">
					e-Proc
				</span>
			</div>

			<nav className="flex flex-col gap-xs">
				<NavItem to="/dashboard" iconName="BarLineChart">
					Dashboard
				</NavItem>
				<NavItem to="/manage" iconName="HorizontalBarChart03">
					Manage
				</NavItem>
				<NavItem to="/procurement" iconName="Package">
					Procurement
				</NavItem>
			</nav>
		</aside>
	);
};

export default Sidebar;
