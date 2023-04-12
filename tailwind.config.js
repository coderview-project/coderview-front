/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'orange': '#FF4700',
      'black': '#020100',
      'grey': '#5E574D',
      'salmon': '#FFA37F',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
    extend: {
     backgroundImage:{
      'fondodepantalla': "url('/assets/fondodepantalla.png)",
      'CodeRviewnegro': "url('/assets/CodeRviewnegro.png)",
     }
    },
  },
  plugins: [],
}
