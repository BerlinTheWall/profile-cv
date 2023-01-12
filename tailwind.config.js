/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'turquoise-blue': '#00ADB5',
        'navy-blue': '#181b33',
        'black': '#010806',
        'space': '#EEEEEE',
        'gray-dark': '#393E46',
        'gray-blue': '#8492a6',
        'gray-light': '#d3dce6',
        'purple': '#6F38C5',
        'orange': '#ff7849',
        'red': '#de1635',
        'red-light': '#E84545',
        'invisible': '#transparent',
        'low-opacity': 'rgba(8, 0, 0, 0.6)',
      },
      height: { 110: '40rem' },
    },
  },
  plugins: [],
}
