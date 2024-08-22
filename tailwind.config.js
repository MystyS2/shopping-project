/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile-login': '450px',
      // => @media (min-width: 450px) { ... }
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {addCommonColors: true,}
  )],
}