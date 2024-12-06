const Input = ({
	size = "md",
	label,
	supportingText,
	required = false,
	state = "default",
}) => {
	const sizeClassNames = {
		sm: "py-1 px-2",
		md: "py-2 px-3",
	};

	const stateClassNames = {
		default: "",
		disabled: "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed",
	};

	return (
		<div className="flex flex-col gap-sm">
			{label && (
				<label
					className={`block text-text-sm font-medium text-gray-700`}
					htmlFor="input"
				>
					{label}
					{required && <span className="text-red-500">*</span>}
				</label>
			)}
			<input
				type="text"
				id="input"
				className={`border ${sizeClassNames[size]} ${stateClassNames[state]} rounded-md  w-full`}
				required={required}
			/>
			{supportingText && (
				<p className="text-text-xs text-gray-600">{supportingText}</p>
			)}
		</div>
	);
};
export default Input;
