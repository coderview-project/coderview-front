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
      'white': '#FFFFFF'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',

  ],
}

  

  // module.exports = {

  //   plugins: [
  //       require('flowbite/plugin')
  //   ]

  // }



