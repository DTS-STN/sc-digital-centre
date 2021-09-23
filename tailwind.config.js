module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '325px',
      'sm': '450px',
      'md': '550px',
      'lg': '768px',
      'xl': '992px',
      'xxl': '1200px',
      'v-xxs': { raw: '(min-height: 300px)' },
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

          'footer': '#26374a',
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
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
