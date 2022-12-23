import React, { useEffect } from 'react';
import swings from '../../rss/swings.jpg';
import LeftRightText from '../components/LeftRightText';

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
			</div>
		);
	}, []);

	return (
		<div>
			<div className="" style={{ height: 1000 }}>
				<p>This site is under construction again!</p>
				<LeftRightText left={<>App Development</>} right={<>Is my passion</>} />
				{/* <img src={home} className='' alt='About'/> */}
			</div>
		</div>
	);
}

export default Home;
