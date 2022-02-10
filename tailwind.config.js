module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
   corePlugins: {
    container: true 
  },
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '610px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1316px', 
          },
        }
      })
    } 
  ],
  theme: {
    extend: {
      container: { 
        center: true,
        padding: '1rem',
       }, 
      colors: {
        "primary-100": "#2F80ED",
        "blue-50":"#3B82F6",
        "blue-600":"#2563EB",
        "lightBlue-900": "#0C4A6E",
        "lightBlue-400":"#38BDF8",
        "red-500":"#EF4444",
        "yellow-50":"#FEFCE8",
        "green-50":"#F0FDF4",
        "indigo-50":"#EEF2FF",
        "indigo-500":"#6366F1",
        "coolGray-200":"#E5E7EB",
        "coolGray-400":"#9CA3AF",
        "coolGray-600":"#4B5563",
        "coolGray-500":"#6B7280",
        "coolGray-900":"#111827",
        "coolGray-800":"#1F2937",
        "teal-600":"#0D9488",
        "red-500":"#EF4444",
      },
     


      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-400":"#9CA3AF",
      },

      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary-300': '#94A3B8',
        'coolGray-300': '#D1D5DB',
        'coolGray-400': '#D9D9D9',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        "indigo-500":"#6366F1",
       }),
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.25rem',
        'md': '0.625rem',
        'lg': '1.25rem',
        'xl': '0'
      },
      maxWidth: {
        '200': '200px',
       },
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '3.5rem',
        '7xl': '4rem',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        sm: '0px 16px 20px 0px rgba(0, 0, 0, 0.059)',
        md: '0px 20px 40px 0px rgba(0, 0, 0, 0.102)',
        lg: '0px 10px 15px 0px #0000001A',
         xl: '0 7px 14px 0 rgba(0, 0, 0, 0.2)',
        none: 'none',
      },
      maxWidth: {
        '247': '247px',
        '1/2': '50%',
        '3/4': '75%',
        '3/4': '75%',
      },
      width: {
        '15': '3.75rem',
        '53': '13.25rem',
        '227': '56.75rem',
        17.5: '4.375rem',
        1000: '64.5rem',
      },
      height: {
        544: '34rem',
        15: '3.75rem',
        53: '13.25rem',
        134: '33.5rem',
        176: '44rem',
        53: '13.25rem',
        23: '5.75rem',
        125: '31.25rem',
        17.5: '4.375rem',
        45: '45rem',
        30: '7.5rem',
        92: '22.938rem',
       },
       scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
       '200': '2',
      },
      zIndex: {
        '-9999': '-9999',
        '0': 0,
        '1': -1,
       '10': 10,
       '9': 9,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
       '999': 999,
       '9999': 9999,
        'auto': 'auto',
      },
      inset: {
        '45': "180px",
        '17': "70px",
        '15': "57px",
      },
      opacity: {
        '60': '60%',
        '80': '80%',
       },
       lineHeight: {
        '0': '0',
        '7': '1.8rem',
        '13': '13px',
        '19': '19px',
        '18': '18px',
        '17': '17px',
        '24': '24px',
        '15': '15px',
        '16': '16px',
        '20': '20px',
        '22': '22px',
        '32': '32.4px',
        '30': '30px',
       }
    },
  },
  // Other stuff
};
