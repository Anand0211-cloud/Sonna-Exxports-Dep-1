/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white": "rgb(252, 246, 255)",
        "primary": "#5e2c5c",
        "primary-dark": "#2e162d",
        "primary-light": "#8e5c8c",
        "accent-beige": "#f3e5d8",
        "accent-beige-hover": "#e6d0bc",
        "background-light": "rgb(252, 246, 255)",
        "background-dark": "#1d151c",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
      })
    },
  ],
}
