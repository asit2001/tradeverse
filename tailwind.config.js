/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./node_modules/primereact/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		// eslint-disable-next-line no-undef
		require('flowbite/plugin'),
	],
};
