import React from 'react';
import WebIcon from '../../assets/WWW-Icon.svg';
import GithubIcon from '../../assets/github.svg';

const ProjectPart = ({ title, type, text, skills, links }) => (
	<div className="rounded-xl max-w-sm gap-5 bg-[var(--forest)] text-white min-h-[30vh] p-5 w-[385px] min-w-[330px]">
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
								{/* eslint-disable-next-line no-nested-ternary */}
								{link.type === 'Website' ? (
									<WebIcon className="w-10 h-10" />
								) : link.type === 'Github' ? (
									<GithubIcon className="w-10 h-10" />
								) : null}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
		<div className="px-10 py-2">
			<h3 className="text-xl">{title}</h3>
			<p className="leading-5 min-h-[100px] py-5">{text}</p>
			<ul className="flex flex-row gap-2 flex-wrap ">
				{skills.map((skill) => (
					<li key={title + skill} className="hover:text-[var(--feather)]">
						{skill}
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default ProjectPart;
