import React, { useEffect } from 'react';
import swings from '../../rss/swings.jpg';
// import LeftRightText from '../components/LeftRightText';
import LeftTextRightTab from '../components/LeftTextRightTab';

const workTabs = [
	{
		tabContent: (
			<div>
				I work with Art Unlimited as a Software Developer from December 2022 to
				Present.
				<ul>
					<li>
						Established 2 React.js frontends with Node.js backends that
						communicate with MySQL Databases.
					</li>
					<li>
						Facilitated 6 MySQL databases for an internal client and employee
						tracking system and client websites.
					</li>
				</ul>
			</div>
		),
		tabDisplay: 'Art Unlimited (22-Present)',
	},
	{
		tabContent: (
			<div>
				I worked with Art Unlimited as a Software Developer Intern from November
				2021 to December 2022.
				<ul>
					<li>
						Spearheaded the creation of development practices for React.js
						website development.
					</li>
					<li>
						Engineered a React template with backend capabilities for future
						React sites and sites in development.
					</li>
					<li>Led a team for React website development.</li>
					<li>
						Orchestrated practices to raise Google Lighthouse Scores of React
						Websites from 60% and below to 80% or more.
					</li>
					<li>
						Automated deployment of 1 existing application and 4 applications
						with Continuous Integration/Continuous Development workflows for
						projects launching on AWS and WHM cPanel environments.
					</li>
					<li>
						Created users in AWS IAM, buckets in AWS S3, and environments in AWS
						Elastic Beanstalk and Amplify for 4 projects.
					</li>
				</ul>
			</div>
		),
		tabDisplay: 'Art Unlimited (21-22)',
	},
];

const Home = ({ setHero }) => {
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

	// For a cat
	// const dVal = 'M 50 0 v 200 h -400 Q-550,100 -550,250 v 300 Q -550,750 -450,755 h 450' // 'M 50 0 v 100 h -400 Q-550,100 -550,250 v 300 Q -550,750 -450,755 h 450'
	// const dVal2 = 'M 50 0 v 200 h 400 Q550,100 550,250 v 300 Q 550,750 450,755 h -450'

	return (
		<div id="homepage">
			<div
				style={{
					margin: 'auto',
					maxWidth: '1200px',
					width: '70%',
					padding: 20,
				}}
			>
				<h2 className="greenTitle">About Me</h2>
				<p>
					Hello and welcome to my site! I am Xavier Gschwind, a
					Software/Application Developer at Art Unlimited. I am a graduate from
					Bowling Green State University with a Bachelors of Science in Computer
					Science as well as a minor in Marketing. As a lifelong learner, I look
					to continuously grow in my skills and pick up new hobbies, whether it
					be with technology, cooking, and so on. I often am enjoying the
					occasional game, playing with my cats June and Gracie, or exploring on
					walks.
				</p>
			</div>
			<div style={{ padding: 20 }}>
				<LeftTextRightTab tabs={workTabs} title="Work Experience" />
			</div>
			{/* <LeftRightText left={<>Left Content</>} right={<>Right Content</>} /> */}
			{/* <img src={home} className='' alt='About'/> */}
		</div>
	);
};

export default Home;
