/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: "#0D0D0D",
        paper: "#F5F2EB",
        accent: "#E8462A",
        muted: "#8C8C7A",
        border: "#D9D5CB",
        done: "#2D6A4F",
      },
    },
  },
  plugins: [],
};
