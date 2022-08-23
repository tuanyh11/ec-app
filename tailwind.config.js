/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "ease": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      },
      colors: {
        "primary": "#FF6F61",
        "layerColor": "rgba(31, 31, 31, 1)"
      }
    },
  },
  plugins: [],
}
