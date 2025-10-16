/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flyonui/src/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui')
  ],
}