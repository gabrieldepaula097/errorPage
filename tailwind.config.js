/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    maxWidth: {
    '15': '15%',
    '50': '50vw',
    '98': '98vw',
    '100': '100vw',
    },
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '100': '100vh',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '100': '100vh',
    },
    // fontSize: {
    //   'sm': '.875rem',
    //   'top-message': '4rem',
    //   'center-message': '10rem',
    //   'button': '2rem',
    // },
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
