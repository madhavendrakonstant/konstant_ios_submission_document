/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d1d1f',   
        primary100: '#FAFAFA',
        primary200: '#C6C6C8',
        primary300: '#3C3C3C'
      },
      spacing: {
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'custom-sm': '4px',
        'custom-md': '8px',
        'custom-lg': '16px',
        'custom-xl': '32px',
        'custom-full': '45px',
        '100': '100%',
      },

      height: {
        '1/2-screen': '50vh',
        '1/3-screen': '33.333vh',
        '2/3-screen': '66.667vh',
        '3/4-screen': '75vh',
        '4/4-screen' : '100vh',
        'banner' : '300px',
        'banner_mobile' : '200px',
        'color' : '120px'
      },
      minHeight: {
        'custom-md': '200px', 
        'custom-lg': '300px', 
        'custom-xl': '400px', 
        'custom-2xl': '600px',
      },

      maxWidth: {
        '70ch': '70ch',
        'thankyou': '1200px',
        'tab' : '500px'
      },

      fontSize: {
        'checkicon' : '7rem',
        'largetitle' : '5.125rem',
        'title2': '2.2rem',
        'title': '1.5rem',  
        'subtitle': '1.5rem', 
        'caption': '1rem',   
        'label' : '1.25rem',
        'label-sm' : '1rem',
        'input' : '1rem',
        'input-sm': '0.875rem',
        'subtitle2' : '1.1rem',
        'indexlink' : '0.875',
        
      },
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'inner-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
        'bottom-bar' : '0px 10px -10px 0px rgba(35, 66, 177, 0.10)',
        'custom-light': '0px 4px 6px rgba(0, 0, 0, 0.1)',
        'ios' : '0px 4px 20px 0px rgba(0, 0, 0, 0.10)'
      },
      lineHeight: {
        '100': '100%',
        '120' : '120%',
        '150' : '150%',
        'initial': 'initial'
      },
      borderOpacity: {
        '50': '0.25',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-avoid-break': {
          'word-break': 'keep-all',
          'overflow-wrap': 'break-word',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

