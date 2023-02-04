import React from 'react';
import ProjectPart from './ProjectPart';

// {
//     'type': 'Git',
//     'location': 'external',
//     'to': ''
// }

const projectList = [
	{
		title: 'Victors',
		type: 'Professional',
		text: 'The first custom React Site launched with Art Unlimited.',
		skills: ['React.js', 'Node.js', 'Express', 'MySQL', 'cPanel'],
		links: [
			{
				type: 'Website',
				location: 'external',
				to: 'https://victors.com',
			},
		],
	},
];

const Projects = () => (
	<div className="max-w-7xl mx-auto w-3/4 p-5">
		<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5">
			Projects
		</h2>
		<div className="flex flex-col">
			{projectList.map((project) => (
				<ProjectPart
					key={project.title}
					title={project.title}
					type={project.type}
					text={project.text}
					skills={project.skills}
					links={project.links}
				/>
			))}
		</div>
	</div>
);

export default Projects;
