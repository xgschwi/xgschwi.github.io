import React from 'react';
import { Link } from 'react-router-dom';
import xicon from '../../rss/xicon.ico';

function Navbar() {
	return (
		<div className="bg-dull-blue flex h-12 pl-20">
			<div className="my-auto">
				<Link to="/">
					<img className="rounded-full w-6 h-6" src={xicon} alt="logo" />
				</Link>
			</div>
			<div className="navbarItem">
				<Link to="/">Home</Link>
			</div>
			<div className="navbarItem">
				<Link to="about">About Xavier</Link>
			</div>
			<div className="navbarItem">
				<Link to="csproblems">Common CS Problems</Link>
			</div>
			<div className="navbarItem">
				<Link to="pbf">Programmer&apos;s Best Friend</Link>
			</div>
		</div>
	);
}

export default Navbar;
