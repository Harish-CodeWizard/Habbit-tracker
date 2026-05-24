/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#aa3bff',
        'accent-bg': 'rgba(170, 59, 255, 0.1)',
        'accent-border': 'rgba(170, 59, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
