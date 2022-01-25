import React from 'react';
import { hydrate, render } from 'react-dom';
import './styles.css';
import Navbar from './components/Navbar';

function Index() {
	return (
		<div>
			<Navbar />
			<h1 className="text-xl text-light-green">
				Website under construction :D
			</h1>
			<p className="text-2xl text-dull-blue">Stay tuned</p>
		</div>
	);
}

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	hydrate(<Index />, rootElement);
} else {
	render(<Index />, rootElement);
}
