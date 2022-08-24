/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: 'Nunito',
      monstra : 'Montserrat'
    },
    extend: {
      colors: {
        blue1: '#2b95ff',
        blue2: '#0D7FF1',
        light: '#D4E9FF',
        black: '#1D1916',
        lightBlack:'#202020',
      }
    },
  },
  plugins: [],
}
