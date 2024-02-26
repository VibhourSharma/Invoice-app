/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sidebar: "#373B53",
      },
    },
    screens: {
      mobile: { max: "720px" },
    },
  },
  plugins: [],
};
