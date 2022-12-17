import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

function Header() {
	return (
		<div style={{ height: 'fit-content' }}>
			<Navbar />
			<Hero />
		</div>
	);
}

export default Header;
