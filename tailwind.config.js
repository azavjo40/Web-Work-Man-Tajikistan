const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
    },
    extend: {
      fontFamily: {
        sans: ['"Runda"'],
      },
      fontSize: {
        xxs: '.625rem', // 10px
        xxl: '1.75rem', // 28px
        xxxl: '2.215rem', // 35.44px
        13.25: '3.3125rem', // 53px
      },
      letterSpacing: {
        0.32: '0.32px',
        1: '0.07125em', //1.14px
        2: '0.1325em', //2.12px
      },
      colors: {
        amber: {
          75: '#FAF5F0',
          110: '#F0EDE9',
          150: '#EEEAE5D7',
        },
        black: {
          101: '#1D1D1B',
        },
        gray: {
          22: '#CACACA',
          23: '#D3D3D3',
          97: '#979797',
          99: '#9E9E9E',
          55: '#5F5D5B',
          101: '#DFDFDF',
          222: '#DADADA',
          501: '#AEAEAE',
        },
        blue: {
          77: '#007AFF',
        },
      },
      screen: {
        '2xs': '280px',
        xs: '340px',
      },
      width: {
        5.25: '1.31rem', // 21px
        10: '2.5rem', // 40px
        11.75: '2.94rem', // 47px
        12.5: '3.12rem', // 50px
        14: '3.5rem', // 56px
        14.5: '3.62rem', // 58px
        17: '4.25rem', // 68px
        19: '4.75rem', // 76px
        34: '8.5rem', // 136px
        36: '9rem', // 144px
        49: '12.25rem', // 196px
        75: '18.75rem', // 300px
        86.5: '21.625rem', // 346px
        412: '25.75rem',
        627: '39.18rem',
        150: '600px',
        '9/10': '90%',
      },
      height: {
        5.25: '1.31rem', // 21px
        10: '2.5rem', // 40px
        11.25: '2.81rem', // 45px
        11.75: '2.94rem', // 47px
        12.5: '3.12rem', // 50px
        13.5: '3.375rem', // 54px
        14.5: '3.62rem', // 58px
        15: '3.75rem', // 60px
        16.5: '4.125rem', // 66px
        17: '4.25rem', // 68px
        19: '4.75rem', // 76px
        31: '7.75rem', // 124px
        34: '8.5rem', // 136px
        36: '9rem', // 144px
        45.5: '11.375rem', //250-58px
        45: '11.25rem', //180px
        49: '12.25rem', // 196px
        54.75: '13.69rem', // 219px
        60: '15rem', // 240px
        69.25: '17.31rem', // 277px
        92.25: '369px',
      },
      minWidth: {
        23.5: '94px',
        25: '100px',
        40: '160px',
      },
      maxWidth: {
        20: '80px',
        73.5: '294px',
      },
      margin: {
        6.375: '1.59375rem', // 25.5px
        7.5: '1.875rem', // 30px
        11.75: '2.94rem', // 47px
        5.25: '1.31rem', // 21px
        8.75: '2.1875rem', // 35px
        13: '3.25rem', // 52px
        16.75: '4.1875rem', // 67px
        19.25: '4.8125rem', // 77px
        21: '5.25rem', // 84px
      },
      padding: {
        1.875: '0.46875rem', // 7.5px
        2.25: '0.5625rem', // 9px
        6.5: '1.625rem', // 26px
        13.75: '3.4375rem', // 55px
        39: '9.75rem', // 156px
        53.5: '13.375rem', // 214px
      },
      lineHeight: {
        16: '4rem', // 64px
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents, e, prefix, config }) => {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
