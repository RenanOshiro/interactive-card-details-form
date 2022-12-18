/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        errorRed: 'hsl(0, 100%, 66%)',
        grad1: 'hsl(249, 99%, 64%)',
        grad2: 'hsl(278, 94%, 30%)',
        lgViolet: 'hsl(270, 3%, 87%)',
        dgViolet: 'hsl(279, 6%, 55%)',
        vdViolet: 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk'],
      },
    },
  },
  plugins: [],
};
