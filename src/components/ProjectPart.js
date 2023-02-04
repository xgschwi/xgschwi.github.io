import React from 'react';
import WebIcon from '../../assets/WWW-Icon.svg';

const ProjectPart = ({ title, type, text, skills, links }) => (
	<div className="rounded-xl max-w-md gap-5 bg-[var(--forest)] text-white min-h-[30vh] py-5">
		<div>
			<span className="px-5">{type}</span>
			<ul className="flex justify-end px-5">
				{links.map((link) => {
					let aProps = {};
					aProps =
						link.location === 'external'
							? {
									target: '_blank',
									rel: 'noopener noreferrer',
							  }
							: {};

					return (
						<li key={title + link.to}>
							<a
								href={link.to}
								aria-hidden="true"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...aProps}
								className="block w-10 [&>svg>path]:fill-[var(--feather)_!important] [&:hover>svg>path]:fill-[white_!important]"
							>
								{link.type === 'Website' ? (
									<WebIcon className="w-10 h-10" />
								) : null}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
		<div className="px-10 py-2">
			<h3 className="text-xl">{title}</h3>
			<p>{text}</p>
			<ul className="flex flex-row gap-2">
				{skills.map((skill) => (
					<li key={title + skill} className="w-fit">
						{skill}
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default ProjectPart;
