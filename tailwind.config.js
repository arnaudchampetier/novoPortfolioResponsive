/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chivo Mono", "monospace"],
        cinzel: ["Cinzel", "serif"],
        semplicita: ["Semplicita medium", "sans-serif"],
        larken: ["Larken Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
