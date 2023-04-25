/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ibtc-grey': '#E0E0E0',
        'ibtc-grey-2': '#4F4F4F',
        'ibtc-offwhite': '#EAF1FA',

        'ibtc-blue': '#2D65BC',
        'ibtc-blue-dark': '#1E427B',
        'ibtc-blue-darker': '#235094',
        'ibtc-blue-light': '#EFF3FB',

        'ibtc-brown': '#D09F44',
        'ibtc-brown-light': '#F3D6A5',

        'ibtc-black': '#121212',
        'ibtc-light-yellow': '#FDF7E7',
      },
      fontSize: {
        'text-sm': '0.8125rem',
      },
      fontFamily: {
        sans: ['Manrope'],
        oswald: ['Oswald'],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}
