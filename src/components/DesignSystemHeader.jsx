const DesignSystemHeader = ({ children, supportingText }) => {
	return (
		<div className="flex p-4xl bg-base-white">
			<div className="flex flex-col w-full gap-7xl p-6xl bg-gray-50 rounded-[20px]">
				<div className="flex items-center space-x-md">
					<p className="text-text-md font-medium">Shared Components</p>
					<p>➡️</p>
					<p className="text-text-md font-semibold">Buttons</p>
				</div>

				<div className="flex flex-col gap-md">
					<h1 className="text-display-md font-semibold text-gray-900">
						{children}
					</h1>
					{supportingText && (
						<p className="text-text-md font-semibold text-gray-600">
							{supportingText}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default DesignSystemHeader;
