import PropTypes from "prop-types";

const Input = ({
	size = "md",
	label = "Email",
	placeholder = "user@email.com",
	supportingText,
	required = false,
	state = "default",
}) => {
	const sizeClassNames = {
		sm: "px-lg py-md",
		md: "px-[0.875rem] py-[0.625rem]",
	};

	const stateClassNames = {
		default: "text-gray-500 focus: text-gray-900",
		disabled: "",
	};

	return (
		<div className="flex flex-col gap-sm">
			{label && (
				<label
					className={`block text-text-sm font-medium text-gray-700`}
					htmlFor="input"
				>
					{label}
					{required && <span className="text-brand-500"> *</span>}
				</label>
			)}
			<input
				type="text"
				id="input"
				className={`border drop-shadow-xs ${sizeClassNames[size]} ${stateClassNames[state]}  rounded-md  w-full`}
				required={required}
				placeholder={placeholder}
				disabled={state === "disabled"}
			/>
			{supportingText && (
				<p className="text-text-xs text-gray-600">{supportingText}</p>
			)}
		</div>
	);
};
export default Input;

Input.propTypes = {
	size: PropTypes.oneOf(["sm", "md"]),
	label: PropTypes.string,
	placeholder: PropTypes.string,
	supportingText: PropTypes.string,
	required: PropTypes.bool,
	state: PropTypes.oneOf(["default", "disabled"]),
};
