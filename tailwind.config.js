/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',"./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows:{
        '24':'repeat(24,minmax(0,1fr))',
        'layout':'200px minmax(900px,1fr) 100px'
      },
      backgroundColor:{
        'blackOpt80':'#09090b',
        'lightFilter':'#fefeff',
        'dark':'#0f172a',
        'light':'#ffffff',
        'dark-modal':'rgba(15,23,42,0.6)',
        'light-modal':'rgba(255,255,255,0.6)',
        'half-dark': 'rgba(0,0,0,0.5)'
      },
      backdropBlur:{
        'xs':'2px'
      },
      animation:{
        'fade-in': 'opacity .5s ease-in-out forwards',
        'fade-out': 'opacity .5s ease-in-out forwards',
      },

    },
  },
  plugins: [
      require('@tailwindcss/forms')({
        strategy:'class'
      })
  ],
}

