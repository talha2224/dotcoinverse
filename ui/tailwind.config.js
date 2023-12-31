/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:"Roboto, sans-serif",
        cursive:"Recursive, sans-serif"
      },
      boxShadow:{
        shadow1:"rgba(0, 0, 0, 0.15) 0px 2px 8px"
      }
    },
  },
  plugins: [],
}