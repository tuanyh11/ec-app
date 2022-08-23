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
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 1},
          '100%': {opacity: 0},
        },
        fadeOut: {
          '0%': {opacity: 0},
          '85%': {opacity: 1},
          '100%': {display: 'none'},
        },
      },
      animation: {
        fadeIn: 'fadeIn 4s',
        fadeOut: 'fadeOut 4s'
      }
    },
  },
  plugins: [],
}
