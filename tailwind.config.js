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
        'green-brown': '#848469',
        'green-brown2': '#a9aa8a',
        'green-brown3': '#c7ccb1',
        'grey': '#dfdfdf',
        'carbon': '#575757',
      },
      height: { 110: '40rem' },
    },
  },
  plugins: [],
}
