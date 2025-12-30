/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  corePlugins: {
    fontWeight: true, // <-- make sure this is not disabled
  },
  plugins: [],
}
