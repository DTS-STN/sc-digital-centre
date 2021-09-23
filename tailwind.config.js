module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Lato'],
      body: ['Noto sans'],
    },
    fontSize: {
      xxs: ['12px', '16px'],
      xs: ['14px', '16px'],
      sm: ['16px', '22px'],
      base: ['18px', '28px'],
      lg: ['20px', '32px'],
      p: ['20px', '30px'],
      h4: ['22px', '20px'],
      h3: ['24px', '24.3px'],
      h2: ['30px', '33.5px'],
      h1: ['36px', '42px'],
      h1l: ['38px', '42px'],
      h1xl: ['45px', '54px'],
      h1xxl: ['70px', '84px'],
    },
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
          'canada-footer-font': '#284162',
          'canada-footer-hover-font-blue': '#0535d2',
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
