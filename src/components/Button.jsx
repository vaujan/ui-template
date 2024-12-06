import PropTypes from "prop-types";

const Button = ({
	children,
	size = "md",
	hierarchy = "primary",
	state = "default",
}) => {
	const baseClassNames =
		"inline-flex items-center justify-center rounded-md border font-semibold transition duration-150 ease-in-out";

	const sizeClassNames = {
		sm: "text-text-sm px-[12px] py-[8px] rounded-[8px] gap-xs",
		md: "text-text-sm px-[14px] py-[10px] rounded-[8px]",
		lg: "text-text-md px-[16px] py-[12px] rounded-[8px]",
		xl: "text-text-lg px-[18px] py-[14px] rounded-[8px]",
		"2xl": "text-text-xl px-[22px] py-[16px] rounded-md",
	};

	const hierarchyClassNames = {
		primary:
			"bg-brand-500 text-base-white border-transparent hover:bg-brand-600",
		secondary: "bg-white text-brand-900 border-brand-300 hover:bg-brand-50",
		tertiary:
			"bg-transparent text-brand-900 border-transparent hover:bg-brand-50",
	};

	const stateClassNames = {
		default: "",
		disabled: "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed",
	};

	return (
		<button
			className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 
				${baseClassNames} 
				${sizeClassNames[size]} 
				${hierarchyClassNames[hierarchy]} 
				${stateClassNames[state]}`}
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
	hierarchy: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
	state: PropTypes.oneOf(["default", "disabled"]),
};
