import React from 'react';
import swings from '../../rss/swings.jpg';
/**
 * @param {buffer} swings
 */

function Hero() {
	return (
		<div className="heroContainer">
			<div style={{ paddingRight: 50 }}>
				<div>Howdy! I am Xavier Gschwind</div>
				<div>An Application Developer at Art Unlimited</div>
			</div>
			<div style={{ width: 400 }}>
				<img
					src={swings}
					alt="Xavier"
					style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '10%' }}
				/>
			</div>
		</div>
	);
}

export default Hero;
