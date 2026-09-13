/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solarGreen: '#16a34a', // Solar theme green
        solarYellow: '#eab308', // Energy yellow
      },
    },
  },
  plugins: [],
}