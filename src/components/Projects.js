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
	{
		title: 'Art Unlimited',
		type: 'Professional',
		text: 'Led development for the second custom React Site launched with Art Unlimited.',
		skills: ['React.js', 'Node.js', 'Express', 'MySQL', 'cPanel'],
		links: [
			{
				type: 'Website',
				location: 'external',
				to: 'https://artunlimitedusa.com',
			},
		],
	},
	{
		title: 'Full Stack Open',
		type: 'Personal',
		text: 'Participated in Full Stack Open Course for a MERN Stack',
		skills: ['MongoDB', 'Express', 'React.js', 'Node.js'],
		links: [
			{
				type: 'Github',
				location: 'external',
				to: 'https://github.com/xgschwi/FullStackOpen',
			},
		],
	},
	{
		title: 'First Laravel App',
		type: 'Personal',
		text: 'Creating first PHP application on Laravel Framework',
		skills: [
			'Laravel',
			'PHP',
			'HTML',
			'CSS',
			'MVC',
			'SQL',
			'phpMyAdmin',
			'XAMPP',
		],
		links: [
			{
				type: 'Github',
				location: 'external',
				to: 'https://drive.google.com/drive/folders/1DwUgx4EDtQbQ3TWaMLTlLDycuykeAfpy?usp=sharing',
			},
		],
	},
];

const Projects = () => (
	<div className="max-w-7xl mx-auto p-5">
		<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5 mx-auto w-fit">
			Projects
		</h2>
		<div className="flex flex-row gap-5 flex-wrap justify-center px-5">
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
