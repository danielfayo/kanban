/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    colors: {
      "Main-Purple": "#635FC7",
      "Main-Purple-Hover": "#A8A4FF",
      "Black": "#000112",
      "Very-Dark-Grey": "#20212C",
      "Dark-Grey": "#2B2C37",
      "Lines-Dark": "#3E3F4E",
      "Medium-Grey": "#828FA3",
      "Lines-Light": "#E4EBFA",
      "Light-Grey-Light-Bg": "#F4F7FD",
      "White": "#FFFFFF",
      "Red": "#EA5555",
      "Red-Hover": "#FF9898",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}