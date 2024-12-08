import NavItem from "../components/NavItem";

const Sidebar = () => {
	return (
		<aside className="w-[280px] min-h-full p-lg">
			<div className="flex items-center gap-sm mb-2xl">
				<span className="text-xl font-semibold text-gray-50 text-center w-full">
					Navbar
				</span>
			</div>

			<nav className="flex flex-col gap-xs">
				<NavItem to="/">Overview</NavItem>
				<NavItem to="/components">Components</NavItem>
				<NavItem to="/foundations">Foundations</NavItem>
			</nav>
		</aside>
	);
};

export default Sidebar;
