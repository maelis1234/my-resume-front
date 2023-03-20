/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '600px',
      lg: '1024px',
    },
    extend: {
      colors: {
        'primary-violet': '#6D28D9',
        'secondary-violet': '#E5C7FC',
        'background-violet': '#EED4FA'
      }
    },
  },
  plugins: [],
}
