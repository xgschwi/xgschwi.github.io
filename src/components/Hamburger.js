import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setActive((a) => !a)}
				name="Toggle Hamburger Menu"
				aria-label="Toggle Hamburger Menu"
				className="ml-auto pr-8 md:hidden"
			>
				<div className="p-1/2">
					<svg
						className="w-16 h-16 text-[var(--marine)]"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d={`${
								active ? 'M4 4 20 20 M20 4 4 20' : 'M4 6h16M4 12h16M4 18h16'
							}`}
						/>
					</svg>
				</div>
			</button>
			<div
				className={`absolute left-0 top-24 w-full bg-white transition-[max-height] duration-900 ease-in-out overflow-hidden ${
					active ? 'max-h-screen' : 'max-h-0'
				}`}
			>
				<ul className="flex flex-col flex-wrap">
					<li className="w-full text-center self-center flex text-[var(--marine)] no-underline text-2xl font-extrabold">
						<button type="button" onClick={() => setActive((a) => !a)}>
							<Link to="/about" className="w-full h-full px-5 py-10">
								About
							</Link>
						</button>
					</li>
					<li className="w-full text-center self-center flex text-[var(--marine)] no-underline text-2xl font-extrabold">
						<button type="button" onClick={() => setActive((a) => !a)}>
							<Link to="/work-experience" className="w-full h-full px-5 py-10">
								Work Experience
							</Link>
						</button>
					</li>
					<li className="w-full text-center self-center flex text-[var(--marine)] no-underline text-2xl font-extrabold">
						<button type="button" onClick={() => setActive((a) => !a)}>
							<Link to="/projects" className="w-full h-full px-5 py-10">
								Projects
							</Link>
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Hamburger;
