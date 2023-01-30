/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		extend: {
			textShadow: {
				nav: '0px 1px 10px rgba(131, 227, 185, 0.793);',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		}),
	],
};
