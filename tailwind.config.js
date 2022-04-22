module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl':'0rem 0rem 3rem rgb(82 255 168)'
      },
      fontSize:{
        'xl': '1.4rem',
        '2xl': '1.7rem'
      },
      minHeight: {
        '80': '20rem',
      },
      maxWidth: {
        'xl': '33.8rem',
      }, 
      letterSpacing:{
        '1': '0.25em'
      }     
    },
    colors : {  
      "light-cyan": "#cee3e9",
      "neon-green": "#52ffa8",
      'grayish-blue': '#4e5d73',
      'dark-grayish-blue': '#323a49',
      'dark-blue': '#1f2632',
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      Manrope : ['Manrope', 'san-serif']
    }
  },
  plugins: [],
}
