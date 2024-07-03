/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#42b3e8",
        secondary: "#143144",
        tertiary: "#d8e5cf",
        // hover: "#42b3e8",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
      },
      screens: {
        midmd: "880px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), "@relume_io/relume-ui"],
};

// /** @type {import('tailwindcss').Config} */

// module.exports = {
// 	content: [
// 	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
// 	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
// 	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
// 	  "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
// 	],
// 	theme: {
// 	  extend: {},
// 	},
// 	presets: [require("@relume_io/relume-tailwind")],
// 	plugins: [],
//   }
