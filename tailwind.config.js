/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'black': '#000000',
        'dark-purple': '#5C2DD5',
        'purple': '#7945FF',
        'red': '#FD6687',
        'white': '#FFFFFF',
        'yellow': '#FFCE67',
      }
    },
  },
  plugins: [],
}

