/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '6.5xl': ['66px'],
        '7.5xl': ['5rem', { lineHeight: '6rem' }],
        '10xl': ['9.5rem'],
      },
      spacing: {
        '7/10': '70%',
        '8.3/10': '83%',
      },
      borderWidth: {
        6: '6px',
      },
      saturate: {
        120: '1.20',
        125: '1.25',
        135: '1.35',
      },
      screens: {
        xs: '400px',
        sm: '576px',
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};
