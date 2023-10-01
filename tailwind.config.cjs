/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: "#d87d4a",
        secondary: "#fbaf85",
        dark: "#101010",
        gray: "#f1f1f1",
        milkWhite: "#fafafa",
        white: "#ffffff",
        black: "#000000",
        // You can add more colors as needed
      },
      fontFamily: {
        // Define your custom font families here
        Manrope: ["Manrope", "Arial", "sans"],
        serif: ["Georgia", "serif"],
        // You can add more font families as needed
      },
    },
  },
  plugins: [],
};
