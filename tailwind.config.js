/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '26rem',
        '122': '28rem',
        '124': '30rem',
        '126': '32rem',
      }
    },
  },
  plugins: [],
}

