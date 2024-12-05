const Projects = () => {
	const projects = [
		{
			title: "Project 1",
			description: "Description of project 1",
			tech: ["React", "Tailwind", "Node.js"],
		},
		{
			title: "Project 2",
			description: "Description of project 2",
			tech: ["Vue", "CSS", "Firebase"],
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 py-7xl">
			<div className="max-w-7xl mx-auto px-xl sm:px-3xl lg:px-4xl">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
					<div className="mt-6xl grid gap-4xl md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-base-white rounded-lg shadow-lg p-3xl"
							>
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="mt-md text-gray-600">{project.description}</p>
								<div className="mt-xl flex flex-wrap gap-md">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-lg py-xs bg-gray-100 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
