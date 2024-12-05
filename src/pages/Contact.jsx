const Contact = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-7xl">
			<div className="max-w-7xl mx-auto px-xl sm:px-3xl lg:px-4xl">
				<div className="max-w-lg mx-auto">
					<h2 className="text-display-xs font-bold text-center text-gray-900">
						Contact Me
					</h2>
					<form className="mt-4xl space-y-3xl">
						<div>
							<label
								htmlFor="name"
								className="block text-text-lg font-medium text-gray-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								className="mt-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="mt-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-text-sm font-medium text-gray-700"
							>
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								className="mt-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-sm px-xl border border-transparent rounded-md shadow-sm text-text-sm font-medium text-base-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
