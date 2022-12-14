/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Poppins", "sans-serif"],
        mono: ["JetBrains mono", "monospace"],
      },
    },
  },
  plugins: [],
};
