/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
