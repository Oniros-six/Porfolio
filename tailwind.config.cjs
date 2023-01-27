/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/**/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./assets/*.svg",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#701a75",
        "secondary": "#f0abfc",

      }
    },
  },
  plugins: [],
}
