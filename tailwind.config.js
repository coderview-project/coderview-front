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
   
    extend: {
      backgroundImage: {
        'fondo': "url('src/assets/fondo de pantalla.png')",
        'CodeRview': "url('src/assets/CodeRview negro.png')",
    },
  },
  plugins: [],
}
}