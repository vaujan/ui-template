import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-sm px-lg py-md rounded-md transition-all ${
          isActive
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`
      }
    >
      <span className="text-sm font-medium">{children}</span>
    </NavLink>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
