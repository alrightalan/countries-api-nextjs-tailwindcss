module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dark-bg": "#202c37",
				"light-bg": "#fafafa",
				"dark-elements": "#2b3945",
				"light-elements": "#fff",
			},
			fontFamily: {
				nunito: ['"Nunito Sans"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark"],
			textColor: ["dark"],
		},
	},
	plugins: [],
};
