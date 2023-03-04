/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },


  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#661AE6",

          "secondary": "#FFBB38",

          "accent": "#1FB2A5",

          "neutral": "#FFFFFF",

          "base-100": "#F8F8F8",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#121212",

          "error": "#f8fafc",
        },
      },
    ],
  },




  plugins: [require("daisyui")],
}
