const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fiord': {
          '50': '#f2f6f7', 
          '100': '#e6ecf0', 
          '200': '#c5d2db', 
          '300': '#a5b5c4', 
          '400': '#6b7d96', 
          '500': '#404e6c', 
          '600': '#334161', 
          '700': '#232f4f', 
          '800': '#162140', 
          '900': '#0d1530', 
          '950': '#050a1f'
      },
      'bombay': {
        '50': '#fcfcfc', 
        '100': '#f7f9fa', 
        '200': '#ebeef0', 
        '300': '#dfe2e6', 
        '400': '#c9cdd4', 
        '500': '#b0b4be', 
        '600': '#9299ad', 
        '700': '#646f8f', 
        '800': '#404c73', 
        '900': '#242e57', 
        '950': '#0f1738'
    }
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}