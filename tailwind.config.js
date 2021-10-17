const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...fontFamily.sans],
        serif: ['EB Garamond', ...fontFamily.serif]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
