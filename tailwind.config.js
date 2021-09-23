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
        blue: {
          footer: '#26374a',
        },
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
