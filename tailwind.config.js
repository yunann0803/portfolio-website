module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
     },


     boxShadow:{
       "custom-light":"0 0 10px #C1B19A",
       "custom-dark": "0 0 5px #0a0c0e",
     },
     
    extend: {
      colors: {
        default:{
        tan: '#CC8B65',
        ivory:'#F7F5F2',
        beige:"#e3dcd2",
        },
        dark:{
          DEFAULT:"#010101",
          100:"#0a0b0e",
          200:"#16181d",
          500:"#0f1115",
          700:"#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"]
    },
  },
  plugins: [],
}