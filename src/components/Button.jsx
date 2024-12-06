import PropTypes from "prop-types";

const Button = ({
	children = "Button",
	size = "md",
	hierarchy = "primary",
	state = "default",
}) => {
	const baseClassNames =
		"inline-flex items-center justify-center border font-semibold transition duration-150 ease-in-out ";

	const sizeClassNames = {
		sm: "text-text-sm px-[12px] py-[8px] rounded-[8px]",
		md: "text-text-sm px-[14px] py-[10px] rounded-[8px]",
		lg: "text-text-md px-[16px] py-[12px] rounded-[8px]",
		xl: "text-text-lg px-[18px] py-[14px] rounded-[8px]",
		"2xl": "text-text-xl px-[22px] py-[16px] rounded-md",
	};

	const hierarchyClassNames = {
		primary:
			"bg-brand-600 text-base-white border border-white/12 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25),inset_0px_-1px_0px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-brand-700",
		secondaryGray:
			"bg-white text-gray-900 border-gray-300 hover:bg-gray-50 shadow-xs",
		secondaryColor:
			"bg-brand-50 text-brand-900 border-brand-300 hover:bg-brand-100 shadow-xs",
		tertiaryGray:
			"bg-transparent text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-700 shadow-xs",
		tertiaryColor:
			"bg-transparent text-brand-600 border-transparent hover:bg-brand-50 hover:text-brand-700 shadow-xs",
		linkGray:
			"bg-transparent text-gray-600 border-transparent hover:text-gray-700 hover:underline shadow-xs p-0",
		linkColor:
			"bg-transparent text-brand-700 border-transparent hover:text-brand-800 hover:underline shadow-xs p-0",
	};

	const stateClassNames = {
		default: "",
		disabled: "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed",
	};

	return (
		<button
			className={`focus:outline-none focus:ring-2 focus:ring-offset-2  
				${baseClassNames} 
				${hierarchyClassNames[hierarchy]} 
				${sizeClassNames[size]} 
				${stateClassNames[state]}
				`}
		>
			<span className="drop-shadow-xs">{children}</span>
		</button>
	);
};

export default Button;

Button.propTypes = {
	children: PropTypes.string.isRequired,
	size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
	hierarchy: PropTypes.oneOf([
		"primary",
		"secondaryGray",
		"secondaryColor",
		"tertiaryGray",
		"tertiaryColor",
		"linkGray",
		"linkColor",
	]),
	state: PropTypes.oneOf(["default", "disabled"]),
};
