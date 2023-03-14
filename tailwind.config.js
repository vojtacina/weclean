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
          dark: "#0053B3",
          primary: "#006EEB",
          bright: "#158FFF",
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
