import React from 'react';
import about from '../../rss/swings.jpg';

function About() {
	return (
		<div>
			<div className="w-full bg-gray-light my-10 py-5">
				<img
					src={about}
					className="mx-auto rounded-md w-3/4 h-100"
					alt="About"
				/>
			</div>
			<div>About me</div>
		</div>
	);
}

export default About;
