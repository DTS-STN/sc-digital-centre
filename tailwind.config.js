module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'splash-page': 'url(/sp-bg-1.jpg)',
      },
      colors: {
        'gray': {
          secondary: '#7f8c8d', //paragraphs and prefooter bg
          light: '#cfcfcf',
          dark: '#262626',
        },
        'white': {
          DEFAULT: '#FFFFFF',
          light: '#fbfbfb',
        },
        'blue': {
          //primary
          'primary-deep': '#173451',
          'bright': '#3498db',

          //secondary
          'secondary-deep': '#3a6b90',
          'dull': '#5996b2',
        },
        'green': {
          forest: '#28ae60',
          bright: '#87d37c',
        },
        'red': {
          alert: '#d94141',
        },
        'orange': {
          alert: '#EE7100',
        },
        'yellow': '#f39c12',
        'burgundy': '#a24446',

        //colours from design library
        //these are role-based instead of colour-based
        'button': {
          supertask: {
            DEFAULT: '#318000',
            hover: '#1D4D00',
            pressed: '#102900',
          },
          primary: {
            DEFAULT: '#26374A',
            hover: '#1C578A',
            pressed: '#16446C',
          },
          secondary: {
            DEFAULT: '#EAEBED',
            hover: '#CFD1D5',
            pressed: '#BBBFC5',
          },
          danger: {
            DEFAULT: '#BC3331',
            hover: '#942826',
            pressed: '#77201f',
          },
        },
        'btn-border': {
          supertask: {
            DEFAULT: '#458259',
            hover: '#305a3e',
            pressed: '#192f20',
          },
          primary: {
            DEFAULT: '#26374a',
            hover: '#091c2d',
            pressed: '#000000',
          },
          secondary: {
            DEFAULT: '#dcdee1',
            hover: '#bbbfc5',
            pressed: '#989da6',
          },
          danger: {
            DEFAULT: '#6b1d1c',
            hover: '#3b100f',
            pressed: '#060202',
          },
          focus: '#0e62c9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
