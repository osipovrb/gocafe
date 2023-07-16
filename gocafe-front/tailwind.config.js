/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require('flowbite/plugin'),
  ],
  theme: {
    colors: {
      'green-brand': '#809A2C',
      'red-brand': '#F96923',
      'blue-brand': '#6DBEEB',
      'white-brand': '#EEEBE5',
      'black-brand': '#444444',
      'green-dark': '#5F7312',
      'green-light': '#C2D18C',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Onest'],
    },
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.00',
      },
      backgroundImage: {
        'texture': "url('/img/hero-pattern.svg')",
      }
    },
  },
}