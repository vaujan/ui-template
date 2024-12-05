import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav className="bg-white shadow">
			<div className="max-w-7xl mx-auto px-xl sm:px-3xl lg:px-4xl">
				<div className="flex justify-between h-7xl">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<span className="text-display-md font-bold text-gray-800">
								Portfolio
							</span>
						</div>
						<div className="hidden sm:ml-3xl sm:flex sm:space-x-4xl">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={`${
										location.pathname === item.href
											? "border-blue-500 text-gray-900"
											: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
									} inline-flex items-center px-xs pt-xs border-b-2 text-text-sm font-medium`}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
