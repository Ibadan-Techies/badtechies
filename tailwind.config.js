/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ibtc-grey': '#E0E0E0',
        'ibtc-offwhite': '#EAF1FA',
        'ibtc-blue': '#2D65BC',
        'ibtc-blue-dark': '#1E427B',
      },
    },
  },
  plugins: [],
}
