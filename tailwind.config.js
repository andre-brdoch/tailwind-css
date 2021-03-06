const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        // generated with https://colors.eva.design/
        primary: {
          '100': '#FEF3CE',
          '200': '#FDE39E',
          '300': '#FBCE6D',
          '400': '#F8B948',
          '500': '#F4990E',
          '600': '#D17A0A',
          '700': '#AF5F07',
          '800': '#8D4604',
          '900': '#753502',
          'transparent-100': 'rgba(244, 153, 14, 0.08)',
          'transparent-200': 'rgba(244, 153, 14, 0.16)',
          'transparent-300': 'rgba(244, 153, 14, 0.24)',
          'transparent-400': 'rgba(244, 153, 14, 0.32)',
          'transparent-500': 'rgba(244, 153, 14, 0.4)',
          'transparent-600': 'rgba(244, 153, 14, 0.48)',
        },
        success: {
          '100': '#EFFDD5',
          '200': '#DCFBAD',
          '300': '#C0F382',
          '400': '#A3E761',
          '500': '#7AD831',
          '600': '#5DB923',
          '700': '#439B18',
          '800': '#2D7D0F',
          '900': '#1D6709',
          'transparent-100': 'rgba(122, 216, 49, 0.08)',
          'transparent-200': 'rgba(122, 216, 49, 0.16)',
          'transparent-300': 'rgba(122, 216, 49, 0.24)',
          'transparent-400': 'rgba(122, 216, 49, 0.32)',
          'transparent-500': 'rgba(122, 216, 49, 0.4)',
          'transparent-600': 'rgba(122, 216, 49, 0.48)',
        },
        info: {
          '100': '#D9F5FE',
          '200': '#B4E7FE',
          '300': '#8ED5FE',
          '400': '#72C3FD',
          '500': '#44A6FC',
          '600': '#3181D8',
          '700': '#2261B5',
          '800': '#154492',
          '900': '#0D2F78',
          'transparent-100': 'rgba(68, 166, 252, 0.08)',
          'transparent-200': 'rgba(68, 166, 252, 0.16)',
          'transparent-300': 'rgba(68, 166, 252, 0.24)',
          'transparent-400': 'rgba(68, 166, 252, 0.32)',
          'transparent-500': 'rgba(68, 166, 252, 0.4)',
          'transparent-600': 'rgba(68, 166, 252, 0.48)',
        },
        warning: {
          '100': '#FEFDD4',
          '200': '#FDFBAA',
          '300': '#FBF77F',
          '400': '#F7F25E',
          '500': '#F2EB2B',
          '600': '#D0C91F',
          '700': '#AEA715',
          '800': '#8C860D',
          '900': '#746E08',
          'transparent-100': 'rgba(242, 235, 43, 0.08)',
          'transparent-200': 'rgba(242, 235, 43, 0.16)',
          'transparent-300': 'rgba(242, 235, 43, 0.24)',
          'transparent-400': 'rgba(242, 235, 43, 0.32)',
          'transparent-500': 'rgba(242, 235, 43, 0.4)',
          'transparent-600': 'rgba(242, 235, 43, 0.48)',
        },
        danger: {
          '100': '#FFE7D3',
          '200': '#FFC8A8',
          '300': '#FFA27C',
          '400': '#FF7E5C',
          '500': '#FF4326',
          '600': '#DB261B',
          '700': '#B71317',
          '800': '#930C1A',
          '900': '#7A071C',
          'transparent-100': 'rgba(255, 67, 38, 0.08)',
          'transparent-200': 'rgba(255, 67, 38, 0.16)',
          'transparent-300': 'rgba(255, 67, 38, 0.24)',
          'transparent-400': 'rgba(255, 67, 38, 0.32)',
          'transparent-500': 'rgba(255, 67, 38, 0.4)',
          'transparent-600': 'rgba(255, 67, 38, 0.48)',
        },
        neutral: {
          '400': '#EEEBD0',
          '500': '#C2C0AC',
          '800': '#34403A',
        },
      },
      fontFamily: { standard: [ 'Rubik', 'sans-serif' ] },
      spacing: {
        '2/3': '66.66%',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '24%',
        '1/5': '20%',
      },
      container: { center: true },
      screens: { xl: null },
    },
  },
  plugins: [
    plugin(function setBaseStyles({ addBase, config }) {
      addBase({
        a: {
          color: config('theme.colors.danger.700'),
          fontWeight: config('theme.fontWeight.bold'),
        },
      });
      addBase({ code: { backgroundColor: config('theme.colors.neutral.400') } });
    }),
  ],
};
