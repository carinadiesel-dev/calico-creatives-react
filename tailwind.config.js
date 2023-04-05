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
        }
      },
      fontFamily: {
        sans: [
          'ClashDisplay',
          'ui-sans-serif',
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
        ]
      }
    },
  },
  plugins: [],
}