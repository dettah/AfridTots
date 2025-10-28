import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cherry: ["'Cherry Bomb One'", "cursive"],
      },
    },
  },
  plugins: [lineClamp],
}
