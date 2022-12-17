import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbarItem">
				<Link to="/">
					Xavier
					{/* <img className="rounded-full w-6 h-6" src={xicon} alt="logo" /> */}
				</Link>
			</div>

			<div className="navbarItem">
				<Link to="about">About</Link>
			</div>
			{/* <div className="navbarItem">
				<Link to="csproblems">Common CS Problems</Link>
			</div> */}
			{/* <div className="navbarItem">
				<Link to="pbf">Programmer&apos;s Best Friend</Link>
			</div> */}
		</div>
	);
}

export default Navbar;
