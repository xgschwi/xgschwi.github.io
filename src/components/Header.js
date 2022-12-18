import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

function Header({ heroContent }) {
	return (
		<div style={{ height: 'fit-content' }}>
			<Navbar />
			<Hero content={heroContent} />
		</div>
	);
}

export default Header;
