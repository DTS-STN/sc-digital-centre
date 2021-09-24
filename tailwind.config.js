const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Lato'],
      body: ['Noto sans'],
    },
    screens: {
      xs: '376px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        gray: {
          secondary: '#7f8c8d', //paragraphs and prefooter bg
          light: '#cfcfcf',
          dark: '#262626',
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#fbfbfb',
        },
        blue: {
          //primary
          'primary-deep': '#173451',
          'bright': '#3498db',

          //secondary
          'secondary-deep': '#3a6b90',
          'dull': '#5996b2',

          // footer
          'dark': '#26374a',
          'anchor': '#284162',
          'link': '#0535d2',
        },
        green: {
          forest: '#28ae60',
          bright: '#87d37c',
        },
        red: {
          alert: '#d94141',
        },
        orange: {
          alert: '#EE7100',
        },
        yellow: '#f39c12',
        burgundy: '#a24446',
      },
      backgroundImage: () => ({
        'footer-parliament-image': 'url(../public/landscape.png)',
        'splash-page': 'url(../public/sp-bg-1.jpg)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
