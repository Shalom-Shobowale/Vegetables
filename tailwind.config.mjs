/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#82ae46",
        foreground: "#f7f7f7",
        textColors: "#848c8e"
      },
      fontFamily:{
        Lora:["Lora", "open sans"],
        Cursive:["Cedarville Cursive", "open sans"],
        Poppins:["Poppins", "open sans"],
        Amatic:["Amatic SC", "serif"],
      }
    },
  },
  plugins: [],
};

export default config;
