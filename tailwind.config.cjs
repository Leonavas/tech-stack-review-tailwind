const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: { ...colors },
			fontFamily: {
				'sans': ["'DM Sans'", 'system-ui']
			  },
			  transformOrigin: {
				"0": "0%",
			  },
			  zIndex: {
				"-1": "-1",
			  },
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
};
