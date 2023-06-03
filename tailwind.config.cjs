const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,md,mdx,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville"],
      },
    },
  },
  plugins: [],
};
