/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1a202c', // Dark background color
      },
      textColor: {
        dark: '#ffffff', // Dark text color
      },
    },
  },
  plugins: [],
}

