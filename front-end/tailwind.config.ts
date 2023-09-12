/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0%" },
          "25%": { opacity: "100%" },
          "75%": { opacity: "100%" },
          "100%": { opacity: "0%" }
        },
        in: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "100%" },
          "100%": { opacity: "100%" }
        },
      }
    },
  },
  plugins: [],
}