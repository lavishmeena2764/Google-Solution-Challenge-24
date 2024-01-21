/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        medBlue: {
          100: "#9ddaf2",
          200: "#1c9bcd",
        },
        medGreen: {
          100:"#b4d479",
          200: "#94c23f",
          300: "#779c32",
        },
      },
    },
  },
  plugins: [],
};

