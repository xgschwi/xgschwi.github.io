import React from 'react';
import headshot from '../../assets/headshot.jpg';

const About = () => (
	<div className="max-w-7xl mx-auto w-3/4 p-5 container pl-5 rounded-md my-8 bg-[#E8EFE1]">
		<h2 className="text-[var(--marine)] no-underline text-2xl font-extrabold py-5 mx-auto w-fit">
			About Me
		</h2>
		<div className="flex flex-col md:flex-row gap-10 mx-auto justify-center indent-5 items-center">
			<div className="max-w-[90vw] bg-[white] rounded-2xl px-4 flex-1 my-4 py-4">
				<p className="mb-3">
					Hello and welcome to my site! I am Xavier Gschwind, a
					Software/Application Developer at Art Unlimited. I am a graduate from
					Bowling Green State University with a Bachelors of Science in Computer
					Science as well as a minor in Marketing. With a spirited aspiration, I
					have taken to learning many different languages in the world of web
					development and full stack development.
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
			<div className="bg-[white] rounded-2xl px-4 flex-1 my-4 py-4">
				<p>
					As a lifelong learner, I look to continuously grow in my skills by
					learning modern tech stacks and applying it in personal projects. One
					project I have worked with recently is{' '}
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
					! In my spare time I am happy to pick up new hobbies, whether it be
					with technology, cooking, and so on. I often am enjoying the
					occasional video game, playing with my cats June and Gracie, or
					exploring on walks.
				</p>
				<img
					src={headshot}
					alt="About Me"
					className="rounded-lg w-56 mx-auto mt-6"
				/>
			</div>
		</div>
	</div>
);

export default About;
