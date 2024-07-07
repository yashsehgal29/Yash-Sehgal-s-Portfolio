/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: ['"Merriweather Sans"'],
       comforta:['"Comfortaa"'],
        zoa:['"Playwrite ZA"'],
      }
    },
  },
  plugins: [],
}