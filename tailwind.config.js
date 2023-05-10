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
      animation: {
        strok: 'strok 2s',
        'strok-reverse': 'strok 2s reverse',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
        marqueeReverse: 'marquee 45s reverse infinite',
        marqueeReverse2: 'marquee2 45s reverse infinite',
      },
      keyframes: {
        strok: {
          '100%': {
            'stroke-dashoffset': 400,
            fill: 'transparent',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-140%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(140%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
