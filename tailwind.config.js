/** @tpe {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
        fontFamily:{
          sans:'Inter,sans-serif'
        },
      },
    colors: {

      white: '#ffffff',
      black: '#000000',

      green: {
        100: '#d2f894',
        200: '#6f9429',
        300: '#a3af8d',
        400: '#5e7572',
        500: '#e0e283',
      },
        
      gray: {  
        100: '#a4a4a4',
        200: '#808080',
        300: '#d9d9d9',
      },

      blue:{
        100: '#ccf1fd',
        200: '#667cb5',
      },

      beige:{
        100: '#ebecc8',
        200: '#928131',
      },

      pink:{
        100: '#fce2e2',
        200: '#ffd7d7',
        300: '#e2656e',
      },
        
      orange:{
        orange: '#edc490',
      }, 
      
      red: {
        red100: '#f66d53',
        red200: '#c1833c',
      },
      },
      
    },
    plugins: [],
  };