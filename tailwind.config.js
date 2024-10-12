/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // Enables dark mode using the "dark" class
  content: ["./src/**/*.{html,js}"],  // Ensure all relevant files are scanned
  theme: {
    extend: {
      fontSize: {
        '130': '128px',
      },
      backgroundColor:{
        'darkPrimary': '#1C1C1C'
      },
      screens: {
        'd-sm': '1280px',
        'd-md': '1366px',
        'd-lg': '1600px',
        'd-xl': '1920px',
        'd-2xl': '2560px',
      }
    },
  },
  plugins: [],
}
