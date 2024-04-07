/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myBlue:"rgb(74 108 247)",
        RGB_255:"rgb(255 255 255/var(--tw-bg-opacity))",
        RGB_149:"rgb(149 156 177/var(--tw-text-opacity))",
        RGB_914:"rgb(9 14 52 / var(--tw-text-opacity))",
        RGB_248:"rgb(248 249 255/var(--tw-bg-opacity))",

      }

    },
  },
  plugins: [],
}