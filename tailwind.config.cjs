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
        "terceario": "#0D9488",
        "border" : "#14532D"
      }
    },
  },
  plugins: [],
}
