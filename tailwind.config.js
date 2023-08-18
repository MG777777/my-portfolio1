module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'bili': 'url(../public/giphy.gif)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}