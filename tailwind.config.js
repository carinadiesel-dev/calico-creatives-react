/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eggshell: {
          '400': '#F3EFE0'
        },
        dawn: {
          '400': '#434242'
        },
        black: {
          '400': '#222222'
        },
        teal: {
          '400': '#22A39F'
        },
        calicoPink: {
          '400': '#F48987',
          '200': '#FACCCB',
          '100': '#FFDAD965'
        },
        calicoPeach: {
          '400': '#F98678',
          '300': '#F5A892'
        },
        calicoOrange: {
          '400': '#F5AC6D'
        },
        calicoRedOrange: {
          '400': '#F75742'
        },
        calicoGray: {
          '400': '#707070',
          '200': '#A8A3A3'
        },
        calicoWhite: {
          '400': '#FFFFFF',
          '300': '#FFFFFF88',
          '200': '#FFFFFF4D',
          '100': '#FFFFFF91'
  
        },
      },
      
      fontFamily: {
        'brilon': 'BrilonRegular',
        sans: [
          '"Helvetica Neue"',
          'Roboto',
          'Arial',
          'ClashDisplay',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
         
      },
      backgroundImage: {
        'cloud': 'url(../../public/images/vectorimages/cloud.png)',

        'homeGradient': "linear-gradient(to right, rgba(245, 168, 146, 1), rgba(255, 255, 255, 1)), url(../../public/images/vectorimages/cloud.png)",

        'heroImg': 'url(../../public/images/hero-images/HeroImg.png)',

        'single' : 'linear-gradient(to right, rgba(255, 255, 255, 0.53), rgba(245, 168, 146, 1)), url(../../public/images/vectorimages/cloud.png)',

        'photography': 'url(../../public/images/vectorimages/Photography.png)',

        'graphicDesign': 'url(../../public/images/vectorimages/GraphicDesign.png)',

        'travel': 'url(../../public/images/vectorimages/Travel.png)'
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}