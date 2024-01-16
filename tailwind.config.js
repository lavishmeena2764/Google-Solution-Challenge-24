/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        medBlue: "#1c9bcd",
        medGreen: {
          base: "#94c23f",
          darker: "#779c32",
        },
      },
    },
  },
  plugins: [],
};

