import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import swings from '../../assets/swings.jpg';
import About from '../components/About';

// import LeftRightText from '../components/LeftRightText';
import LeftTextRightTab from '../components/LeftTextRightTab';
import Projects from '../components/Projects';

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
	const { anchor } = useParams('anchor');
	const aboutRef = useRef();
	const workRef = useRef();
	const projRef = useRef();

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

	function scrollIntoRef(ref) {
		window.scrollTo({
			top: ref.current.offsetTop - 80,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		if (anchor === 'about') {
			scrollIntoRef(aboutRef);
		} else if (anchor === 'work-experience') {
			scrollIntoRef(workRef);
		} else if (anchor === 'projects') {
			scrollIntoRef(projRef);
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}, [anchor]);

	return (
		<div id="homepage">
			<div ref={aboutRef}>
				<About />
			</div>

			<div ref={workRef}>
				<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5 mx-auto pl-5 w-fit">
					Work Experience
				</h2>
				<LeftTextRightTab tabs={workTabs} className="max-w-[1200px]" />
			</div>
			<div ref={projRef}>
				<Projects />
			</div>

			{/* <LeftRightText left={<>Left Content</>} right={<>Right Content</>} /> */}
			{/* <img src={home} className='' alt='About'/> */}
		</div>
	);
};

export default Home;
