import React, { useState } from 'react';
import { hydrate, render } from 'react-dom';
import './styles/styles.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import PBF from './Pages/PBF';
import CSProblems from './Pages/CSProblems';
import Header from './components/Header';
import './styles/playfair.css';
import './styles/components.css';

const Index = () => {
	const [heroContent, setHeroContent] = useState('');

	// const [routeComponents, setRouteComponents] = useState([])
	let routeComponents = [];
	let routes = [
		{
			path: '/',
			component: <Home />,
		},
		{
			path: '/pbf',
			component: <PBF />,
		},
		{
			path: '/cs-problems',
			component: <CSProblems />,
		},
		{
			path: '/:anchor',
			component: <Home />,
		},
		{
			path: '*',
			component: <Home />,
		},
	];

	routes = routes.map(({ path, component }) => ({
		component: React.cloneElement(component, {
			setHero: setHeroContent,
		}),
		path,
	}));

	//  useEffect(() => {
	// 	setRouteComponents(routes.map(({path, component}) => <Route path={path} element={component} key={`Route ${path}`} />))
	//  }, [])

	routeComponents = routes.map(({ path, component }) => (
		<Route path={path} element={component} key={`Route ${path}`} />
	));

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
					content="CS, React, Problems, Webpack, react-snap, Deploy, Formatting, Helmet"
				/>
			</Helmet>
			<Header heroContent={heroContent} />
			<Routes>{routeComponents}</Routes>
		</Router>
	);
};

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	hydrate(<Index />, rootElement);
} else {
	render(<Index />, rootElement);
}
