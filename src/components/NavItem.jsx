import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import * as UntitledIcons from "@untitled-ui/icons-react";

const NavItem = ({ children, to, iconName }) => {
	// Dynamically get the icon component

	const Icon = iconName ? UntitledIcons[iconName] : null;

	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex items-center text-text-md gap-lg border border-transparent hover:bg-gray-800 hover:text-base-white hover:drop-shadow-md py-sm px-md rounded-md ${
					isActive
						? "border-t border-t-gray-800 bg-gray-900 text-base-white drop-shadow-md"
						: "text-gray-500"
				}`
			}
		>
			{({ isActive }) => (
				<>
					{Icon && (
						<Icon
							className={`w-3xl h-3xl ${
								isActive ? "text-brand-500" : "text-gray-500"
							}`}
						/>
					)}
					<span className="text-sm font-medium">{children}</span>
				</>
			)}
		</NavLink>
	);
};

NavItem.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	iconName: PropTypes.string,
};

export default NavItem;
