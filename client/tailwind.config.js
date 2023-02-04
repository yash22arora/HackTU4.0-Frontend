/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#1e1e1e",
        primary: {
          bg: "#262626",
          text: "#FFAD00",
          card: "#2B2B2B",
        },
        secondary: "#F1B047",
        tertiary: "#949C9C",
        outline: "#94949C",
      },
    },
  },
  plugins: [],
};
