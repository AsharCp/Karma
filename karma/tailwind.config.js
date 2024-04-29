/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-color': '#4863D3',
        'gray-color': '#757575',
        'green-color': '#3C9060',
      },
    },
  },
  plugins: [],
}

