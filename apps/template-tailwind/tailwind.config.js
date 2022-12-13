/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
					default: "#FFFFFF",
				},
				primary: {
					main: "#FFD85A",
					dark: "#F2994A",
				},
				secondary: {
					main: "#373737",
					light: "#FFFFFF",
				},
				grayscale: {
					50: "#F9F8F8",
					100: "#F3F3F3",
					200: "#E6E6E6",
					300: "#D1D1D1",
					400: "#B9B9B9",
					500: "#A3A3A3",
					600: "#828282",
					700: "#4F4F4F",
					800: "#333333",
				},
				purple: {
					400: "#BB6BD9",
					600: "#9B51E0",
				},
        primaryColor: {
          50: "#FFFBEE",
          100: "#FFF7DE",
          200: "#FFF0BD",
          300: "#FFE89C",
          400: "#FFE07B",
          500: "#FFD85A",
          600: "#FFD13D",
          700: "#FFCA1F",
          800: "#FFC300",
          900: "#E0AB00",
        },
        green: {
          200: "#6FCF97",
          400: "#27AE60",
          600: "#219653",
        },
        blue: {
          200: "#56CCF2",
          400: "#2D9CDB",
          600: "#2F80ED",
        },
      }
    },
  },
  plugins: [],
}
