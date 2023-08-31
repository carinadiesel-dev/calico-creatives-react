/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    // './index.html',
    // './pages/**/*.{ts,tsx}',
    // './components/**/*.{ts,tsx}',
    // './app/**/*.{ts,tsx}',
    // './src/**/*.{ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{
        'cloud': 'url(src/assets/vectorimages/cloud.png)',

        'homeGradient': "linear-gradient(to right, rgba(245, 168, 146, 1), rgba(255, 255, 255, 1)), url(src/assets/vectorimages/cloud.png)",

        'heroImg': 'url(public/images/hero-images/HeroImg.png)',

        'single' : 'linear-gradient(to right, rgba(255, 255, 255, 0.53), rgba(245, 168, 146, 1)), url(./src/assets/vectorimages/cloud.png)',

        'photography': 'url(./src/assets/vectorimages/Photography.png)',

        'graphicDesign': 'url(./src/assets/vectorimages/GraphicDesign.png)',

        'travel': 'url(./src/assets/vectorimages/Travel.png)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}