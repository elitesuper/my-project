/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgdark:"#1e1e1e",
        bgdarkdrop:"#0e0e0e",
        bgdarkactivedrop:"#333333",
      },
    },
  },
  plugins: [],
}
