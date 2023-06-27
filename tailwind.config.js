/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Slab", "serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors:{
        primary:"#45120F",
        secondary:"#D96D46"
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};