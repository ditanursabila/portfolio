/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/preline/preline.js",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        loving: {
          dark: '#CE467B',
          medium: '#EEA1B0',
          accent: '#FFB9AD',
          light: '#FFE1E9',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "primary": "#CE467B",
          "secondary": "#EEA1B0",
          "accent": "#FFB9AD",
          "neutral": "#CE467B",
          "base-100": "#FFE1E9",
          "base-200": "#FFB9AD",
          "base-300": "#FFE1E9",
        },
      },
      "cupcake",
    ],
  },
}