import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    }
  },
  plugins: [],
}
export default config
