/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      white: '#ffffff',

      board: {
        white: '#E8EDF9',
        black: '#B7C0D8',
        attackable: '#5d4bba',
        selected: '#7B61FF',
      },
    },
  },
  plugins: [],
}
