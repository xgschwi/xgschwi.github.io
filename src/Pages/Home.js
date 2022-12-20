import React, { useEffect } from 'react';
import swings from '../../rss/swings.jpg';

function Home({ setHero }) {
	useEffect(() => {
		setHero(
			<div style={{ '--img': `url("${swings}")` }} className="heroBackground">
				<div
					style={{ paddingRight: 50, margin: 'auto' }}
					className="heroColorText"
				>
					<div>Howdy! I am Xavier Gschwind</div>
					<div>An Application Developer at Art Unlimited</div>
				</div>
				{/* <div style={{ width: 400 }}>
					<img
						src={swings}
						alt="Xavier"
						style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '10%' }}
					/>
				</div> */}
			</div>
		);
	}, []);

	return (
		<div>
			<div className="" style={{ height: 1000 }}>
				<p>This site is under construction again!</p>
				{/* <img src={home} className='' alt='About'/> */}
			</div>
		</div>
	);
}

export default Home;
