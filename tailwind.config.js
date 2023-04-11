/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html, js,jsx}",
  ],
  theme: {
    colors: {
      'orange': '#ff4700',
      'black': '#020100',
      'grey': '#5E574D',
      'salmon': '#ffa37f',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}