import React from 'react';
import { hydrate, render } from 'react-dom';
import './styles.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PBF from './components/PBF';
import CSProblems from './components/CSProblems';
import Header from './components/Header';

function Index() {
	return (
		<Router basename="/">
			<Helmet>
				<title>Xavier&apos;s Site</title>
				<meta
					name="description"
					content={`A programmer's site with some tips and tricks for other CS oriented people.`}
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content={`Xavier's Site`} />
				<meta
					property="keywords"
					content="CS, React, Tailwind, Problems, Webpack, react-snap, Deploy, Formatting, Helmet"
				/>
			</Helmet>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/pbf" element={<PBF />} />
				<Route path="/csproblems" element={<CSProblems />} />
				<Route path="*" element={<div>Error 404 Page Not Found</div>} />
			</Routes>
		</Router>
	);
}

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	hydrate(<Index />, rootElement);
} else {
	render(<Index />, rootElement);
}
