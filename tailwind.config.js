/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        zidan: "Zidan",
      },
      screens: {
        md: "870px",
       
      },
    },
  },
  plugins: [],
};
