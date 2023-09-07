/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: {
          "0%": { opacity: "0%" },
          "25%": { opacity: "50%" },
          "50%": { opacity: "100%" },
          "75%": { opacity: "50%" },
          "100%": { opacity: "0%" }

        }
      }
    },
  },
  plugins: [],
}