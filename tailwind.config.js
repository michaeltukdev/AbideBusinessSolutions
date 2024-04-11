/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      color:{
        CeSoir: '#8B74A4'
      }
    },
    fontFamily:{
      dmsans: ['DM Sans', 'sans-serif'],
      syne:['Syne', 'sans-serif']
    }
  },
  plugins: [],
}
