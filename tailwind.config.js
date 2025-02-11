/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "itc-caslon": ["var(--font-itc-caslon)"],
        "monument-grotesk": [
          "MonumentGrotesk-Regular",
          "helvetica",
          "arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
