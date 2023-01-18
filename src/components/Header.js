import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

const Header = ({ heroContent }) => (
	<div style={{ height: 'fit-content' }}>
		<Navbar />
		<Hero content={heroContent} />
		{/* <div className="circles" style={{ top: -27 }} /> */}
	</div>
);

export default Header;
