/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    maxWidth: {
    '50': '50%',
    '98': '98%',
    '100': '100%'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '100': '100%',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '100': '100%',
    },
    fontSize: {
      'sm': '.875rem',
      'top-message': '5rem',
      'center-message': '10rem',
    },
    extend: {
      colors: {
        textColorH1: '#e6abe6',
      },
      container: {
        center: true,
      },
    },
  },
  variants: {},
  plugins:[],
}
