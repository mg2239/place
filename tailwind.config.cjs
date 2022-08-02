/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        grid: "30rem",
      },
      height: {
        grid: "30rem",
      },
    },
  },
  plugins: [],
};
