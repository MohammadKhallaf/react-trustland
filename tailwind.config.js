/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#019FFE",
        lightGray: "#F8F8F8",
        darkGray: "#8B8B8B",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
