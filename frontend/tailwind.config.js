/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#e6007e',
          darkPink: '#c4006b',
          navy: '#1e2838',
          bgGray: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}