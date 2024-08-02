/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Arsenal:['Arsenal SC','sans-serif'],
        Badoni:["Bodoni Moda SC", "serif"]
      }
    },
  },
  plugins: [],
}

