/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        200: "2",
      },
      animation: {
        "text-gradient": "text 2s linear infinite",
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
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
