/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#a0a0a0",
        tertiary: "#0d1426",
        "black-100": "#0a0f1a",
        "black-200": "#050811",
        "white-100": "#f3f3f3",
        accent: "#00d9ff",
        "accent-dark": "#00b8d4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(0, 217, 255, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
