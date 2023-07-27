/** @type {import('tailwindcss').Config} */
const colors = require("./node_modules/designsystem/colors");
module.exports = {
  content: [
    "./src/**/*.{js,tx,jsx,tsx}",
    "node_modules/designsystem/dist/**/*.{js,tx,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      ring: {
        ...colors,
      },
      fill: {
        ...colors,
        "yellow-star": "#F3A939",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
