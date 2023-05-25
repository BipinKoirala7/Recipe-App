/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "searchGrid": "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};

