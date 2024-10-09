/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    screens:{
      md: "640px",
      xl: "1224px"
    }
  },
  plugins: [],
}

