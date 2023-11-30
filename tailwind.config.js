/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8Ee",
        brightGreen: "#539165",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
};
