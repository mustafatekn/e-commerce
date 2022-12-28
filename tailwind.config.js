/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue":"#2A59FE",
        "primary-white":"#F9F9F9"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}