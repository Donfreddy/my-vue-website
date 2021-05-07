/*
Tailwind - The Utility-First CSS Framework

A project by Don Freddy(@Donfreddy),

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file.
View the full documentation at https://tailwindcss.com.

Default configuration file Tailwind uses internally.
https://unpkg.com/browse/tailwindcss@2.1.1/stubs/defaultConfig.stub.js
*/

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.vue', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#65F4AB',
      darkGreen: '#33423e',
      secondary: '#FD504F',
      bgColor: '#333438',
      dark: '#25262A',
      darkGrey: '#2d2e32',
      grey: '#87888C',
      ...colors,
    },
    fontFamily: {
      sans: ['Roboto Mono', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/forms')],
  plugins: [],
};
