/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			sm: "359px",
			md: "759px",
			lg: "1023px",
			xl: "1239px",
			xxl: "1440px",
			// md: "1024px",
		},
	},
	plugins: [],
};
