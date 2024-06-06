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
        'blackOpt80':'#09090b'
      },
      backdropBlur:{
        'xs':'2px'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')({
        strategy:'class'
      })
  ],
}

