const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(
			__dirname,
			'{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
		),
		'libs/tailwind-lib/src/**/*!(*.stories|*.spec).{ts,tsx,html}',
		...createGlobPatternsForDependencies(__dirname),
	],
	theme: {
		colors:{
			"background": "#FFFFFF",
			"primary-main": "#FFD85A",
			"primary-dark": "#F2994A",
			"secondary-main": "#373737",
			"secondary-light": "#FFFFFF",
			"action": "#ffff",
			"info-main": "#5f5fc4",
			"info-light": "#8e2de2",
			"info-dark": "#00b22c",
			"info-contrastText": "#293780",
			"common-white": "#fff",
			"common-black": "#000",
			"success-main": "#00ff22",
			"success-dark": "#2b822d",
			"error-light": "#F18989",
			"error-main": "#EB5757",
			"warning-light":"rgba(255, 157, 0, 0.62)",
			"warning-main": "#ff9d00",
			"available-main": "#d3ffdc",
			"available-dark": "rgba(0, 255, 52, 0.674463)",
			"available-contrastText": "#2b822d",
			"grayscale-50": "#F9F8F8",
			"grayscale-100": "#F3F3F3",
			"grayscale-200": "#E6E6E6",
			"grayscale-300": "#D1D1D1",
			"grayscale-400": "#B9B9B9",
			"grayscale-500": "#A3A3A3",
			"grayscale-600": "#828282",
			"grayscale-700": "#4F4F4F",
			"grayscale-800": "#333333",
			"purple-400": "#BB6BD9",
			"purple-600": "#9B51E0",
			"primaryColor-50": "#FFFBEE",
			"primaryColor-100": "#FFF7DE",
			"primaryColor-200": "#FFF0BD",
			"primaryColor-300": "#FFE89C",
			"primaryColor-400": "#FFE07B",
			"primaryColor-500": "#FFD85A",
			"primaryColor-600": "#FFD13D",
			"primaryColor-700": "#FFCA1F",
			"primaryColor-800": "#FFC300",
			"primaryColor-900": "#E0AB00",
			"green-200": "#6FCF97",
			"green-400": "#27AE60",
			"green-600": "#219653",
			"blue-200": "#56CCF2",
			"blue-400": "#2D9CDB",
			"blue-600": "#2F80ED",
			"blue-900": "#1D2992",
			"chart-1": "#3751FF"
		},
		extend: {
			height: {
				'100vh': '100vh',
				'vh-90': 'calc(100vh - 90px)'
			},
			fontSize: {
				"4.5xl": "40px",
				"5.5xl": "56px"
			},
			borderWidth: {
				1: '1px'
			},
			borderRadius: {
				'circle': "50%",
				'50': "50px"
			},
			gridTemplateColumns: {
				'9/3': '75% 25%'
			},
			width: {
				'100%': '100%'
			},
			maxWidth: {
				50: '200px'
			},
		},
	},
};
