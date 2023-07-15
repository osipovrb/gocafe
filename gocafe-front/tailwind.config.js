/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'green':        '#809A2C',
      'red':          '#F96923',
      'blue':         '#6DBEEB',
      'white':        '#EEEBE5',
      'black':        '#444444',
      'green-dark':   '#5F7312',
      'green-light':  '#C2D18C',

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
      }
    },
  },
  plugins: [],
}