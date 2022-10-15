/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "ubuntu": ["Ubuntu", "ui-sans-serif"]
    },
    extend: {
      colors: {
        blue: {
          dark: "#1C5AA4",
          primary: "#1E76DC"
        }
      }
    },
  },
  plugins: [],
}
