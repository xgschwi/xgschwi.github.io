import React, { useEffect } from 'react';
import swings from '../../rss/swings.jpg';
import LeftRightText from '../components/LeftRightText';

function Home({ setHero }) {
	let myline;
	let myline2;
	let length;

	function myFunction() {
		// What % down is it?
		const homepage = document.getElementById('homepage');
		// console.log(homepage.scrollHeight, homepage.offsetTop, document.body.scrollHeight, document.documentElement.scrollTop + .10*document.documentElement.clientHeight)
		// console.log((document.documentElement.scrollTop + .10*document.documentElement.clientHeight - homepage.offsetTop)/(homepage.offsetHeight))
		let scrollpercent =
			document.documentElement.scrollTop / homepage.offsetHeight; // (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight + document.getElementById('homepage').scrollHeight)
		// (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight );
		// Length to offset the dashes
		// eslint-disable-next-line prefer-template
		// console.log('DBsT'+document.body.scrollTop, 'DEsT'+document.documentElement.scrollTop, 'DHsT'+document.getElementById('homepage').scrollTop, 'DHsH'+document.getElementById('homepage').scrollHeight,'DEsH'+document.documentElement.scrollHeight, 'DEcH'+document.documentElement.clientHeight, scrollpercent)
		// let homepageDims = homepage.getBoundingClientRect();
		// console.log(homepageDims)
		if (scrollpercent < 0) scrollpercent = 0;
		// else if (scrollpercent>0.30) scrollpercent*= 1.2
		// else if (scrollpercent> 0.10) scrollpercent*=1.3
		scrollpercent = 0.5 * (Math.sin((scrollpercent - 0.5) * Math.PI) + 1) * 2.3;
		// scrollpercent = 0.99
		const draw = length * scrollpercent;

		try {
			myline.style.strokeDashoffset = length - draw;
			myline2.style.strokeDashoffset = length - draw;
			// eslint-disable-next-line no-empty
		} catch (e) {}
	}

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

		myline = document.getElementById('myline');
		myline2 = document.getElementById('myline2');
		length = myline.getTotalLength();
		// circle = document.getElementById("circle");
		// The start position of the drawing
		myline.style.strokeDasharray = length;
		myline2.style.strokeDasharray = length;
		// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
		myline.style.strokeDashoffset = length;
		myline2.style.strokeDashoffset = length;
	}, []);

	// For a cat
	// const dVal = 'M 50 0 v 200 h -400 Q-550,100 -550,250 v 300 Q -550,750 -450,755 h 450' // 'M 50 0 v 100 h -400 Q-550,100 -550,250 v 300 Q -550,750 -450,755 h 450'
	// const dVal2 = 'M 50 0 v 200 h 400 Q550,100 550,250 v 300 Q 550,750 450,755 h -450'

	window.addEventListener('scroll', myFunction);
	const dVal =
		'M 50 0 v 180 H -800 Q-1000,180 -1000,350 v 300 Q -1000,750 -850,750 h 900'; // 'M 50 0 v 100 h -400 Q-550,100 -550,250 v 300 Q -550,750 -450,755 h 450'
	const dVal2 =
		'M 50 0 v 180 H 934 Q1084,180 1084,350 v 300 Q 1084,750 920,750 h -874'; // 'M 50 0 v 100 h 400 Q550,100 550,250 v 300 Q 550,750 450,755 h -450'
	// const originalDVal = "M 20 0 v 20 a 30 30 0 0 0 30 30 h 600 a 40 40 0 0 1 0 80 h -140 a 30 30 0 0 0 0 60 h 200 a 40 40 0 0 1 0 80 h -100 a 30 30 0 0 0 -30 30 v 20"
	return (
		<div id="homepage">
			<div className="" style={{ height: 1000, paddingTop: 20 }}>
				<div
					style={{
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<svg
						id="mySVG"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMin slice"
					>
						<defs>
							<mask id="dash-mask">
								<path
									className="st0 mask-style"
									strokeDasharray="10,9"
									d={dVal}
								/>
								<path
									className="st0 mask-style"
									strokeDasharray="10,9"
									d={dVal2}
								/>
							</mask>
						</defs>
						<path
							id="myline"
							className="st0"
							strokeDasharray="10,9"
							d={dVal}
							mask="url(#dash-mask)"
						/>
						<path
							id="myline2"
							className="st0"
							strokeDasharray="10,9"
							d={dVal2}
							mask="url(#dash-mask)"
						/>
						Sorry, your browser does not support inline SVG.
					</svg>
				</div>
				<p>This site is under construction again!</p>
				<LeftRightText left={<>Left Content</>} right={<>Right Content</>} />
				{/* <img src={home} className='' alt='About'/> */}
			</div>
		</div>
	);
}

export default Home;
