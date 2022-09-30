/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      board: {
        white: '#E8EDF9',
        black: '#B7C0D8',
      },
    },
  },
  plugins: [],
}
