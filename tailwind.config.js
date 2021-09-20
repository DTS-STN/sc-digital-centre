module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          secondary: '#7f8c8d', //paragraphs and prefooter bg
          light: '#cfcfcf',
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#fbfbfb',
        },
        black: {
          DEFAULT: '#000000',
          dark: '#262626',
        },
        blue: {
          //primary
          'primary-deep': '#173451',
          'bright': '##3498db',

          //secondary
          'secondary-deep': '#3a6b90',
          'dull': '#5996b2',
        },
        green: {
          forest: '#28ae60',
          bright: '#87d37c',
        },
        red: {
          alert: '##d94141',
        },
        orange: {
          alert: '#EE7100',
        },
        yellow: '#f39c12',
        burgundy: '#a24446',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
