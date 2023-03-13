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
          dark: "#1E76DC",
          primary: "#158FFF",
          bright: "#349EFF",
          bg: "#EDF8FF"
        },
        yellow: {
          brand: "#FFCC57"
        },
        green: {
          call: "#4BB818"
        }
      },
      spacing: {
        '1.5': '6px',
      },
      ringWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}
