import React from 'react';
import Navbar from './Navbar';

function Header() {
	return (
		<>
			<div className="bg-ice-blue flex font-muli text-2xl my-auto">
				<div className="mx-20 text-4xl">Welcome to Xavier&apos;s Site</div>
				<div>
					Hosted on Github{' '}
					<a
						className="text-dull-blue"
						href="https://github.com/xgschwi/xgschwi.github.io"
						target="_blank"
						rel="noreferrer noopener"
					>
						Here
					</a>
				</div>
			</div>
			<Navbar />
		</>
	);
}

export default Header;
