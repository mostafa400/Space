/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    lineHeight: {
      "extra-loose": "3.5",
      12: "3rem",
    },
    fontFamily: {
      sans: "Baskerville",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), "prettier-plugin-tailwindcss"],
};
