import React, { useEffect } from 'react';
import swings from '../../rss/swings.jpg';
// import LeftRightText from '../components/LeftRightText';
import LeftTextRightTab from '../components/LeftTextRightTab';

const workTabs = [
	{
		tabContent: (
			<div className="tabDisplayContent scrollbar-y">
				<div>
					I work with Art Unlimited as a Software Developer from December 2022
					to Present.
				</div>
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
			<div className="tabDisplayContent scrollbar-y">
				<div>
					I worked with Art Unlimited as a Software Developer Intern from
					November 2021 to December 2022.
				</div>
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
			<div className="max-w-7xl mx-auto w-3/4 p-5">
				<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5">
					About Me
				</h2>
				<div className="flex flex-col md:flex-row gap-10 mx-auto justify-center indent-5 items-center">
					<div className="max-w-[90vw]">
						<p className="mb-3">
							Hello and welcome to my site! I am Xavier Gschwind, a
							Software/Application Developer at Art Unlimited. I am a graduate
							from Bowling Green State University with a Bachelors of Science in
							Computer Science as well as a minor in Marketing. With a spirited
							aspiration, I have taken to learning many different languages in
							the world of web development and full stack development.
						</p>
						<p className="indent-5">Such languages include:</p>
						<ul className="list-[disclosure-closed] pt-1 marker:text-[var(--marine)] pl-10 indent-2 pb-3">
							<li>React.js and Node.js</li>
							<li>Django</li>
							<li>MySQL, MSSQL, GraphQL</li>
							<li>Visual Basic and .NET</li>
							<li>PHP in a Wordpress Environment</li>
						</ul>
						<span>And that is just to name a few 😉</span>
					</div>

					{/* <div>
						
					</div> */}
					<div>
						<p>
							As a lifelong learner, I look to continuously grow in my skills by
							learning modern tech stacks and applying it in personal projects.
							One project I have worked with recently is{' '}
							<a
								className="underline text-[var(--marine)]"
								href="https://fullstackopen.com/en/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Full Stack Open
							</a>
							. Feel free to check it out on my{' '}
							<a
								className="underline text-[var(--marine)]"
								href="https://github.com/xgschwi"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
							! In my spare time I am happy to pick up new hobbies, whether it
							be with technology, cooking, and so on. I often am enjoying the
							occasional video game, playing with my cats June and Gracie, or
							exploring on walks.
						</p>
						<img src="" alt="About Me" />
					</div>
				</div>
			</div>
			<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5 md:container m-auto pl-5">
				Work Experience
			</h2>
			<LeftTextRightTab tabs={workTabs} />

			{/* <LeftRightText left={<>Left Content</>} right={<>Right Content</>} /> */}
			{/* <img src={home} className='' alt='About'/> */}
		</div>
	);
};

export default Home;
