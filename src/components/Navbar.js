import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [downClass, setDownClass] = useState('');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 1) {
			setDownClass('navbarDown');
		} else setDownClass('');
	});

	return (
		<div className={`w-full h-[10vh] bg-white flex fixed z-10 ${downClass}`}>
			<div className="navbarItem group">
				<Link
					to="/"
					className="group-hover:cursor-pointer group-hover:bg-clip-text group-hover:text-shadow-nav"
				>
					Xavier
					{/* <img className="rounded-full w-6 h-6" src={xicon} alt="logo" /> */}
				</Link>
			</div>

			<div className="navbarItem group">
				<Link
					to="/about"
					className="group-hover:cursor-pointer group-hover:bg-clip-text group-hover:text-shadow-nav"
				>
					About
				</Link>
			</div>
			<div className="navbarItem group">
				<Link
					to="/work-experience"
					className="group-hover:cursor-pointer group-hover:bg-clip-text group-hover:text-shadow-nav"
				>
					Work Experience
				</Link>
			</div>
			<div className="navbarItem group">
				<Link
					to="/projects"
					className="group-hover:cursor-pointer group-hover:bg-clip-text group-hover:text-shadow-nav"
				>
					Projects
				</Link>
			</div>
			{/* <div className="navbarItem">
				<Link to="csproblems">Common CS Problems</Link>
			</div> */}
			{/* <div className="navbarItem">
				<Link to="pbf">Programmer&apos;s Best Friend</Link>
			</div> */}
		</div>
	);
};

export default Navbar;
