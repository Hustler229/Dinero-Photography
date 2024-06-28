/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize:{
      '4xl':['61px',{
        fontWeight:'800',
        lineHeight:'79.3px'
      }],
      '3xl':['38px',{
        fontWeight:'600',
        lineHeight:'53.2px'
      }],
      '2xl':['38px',{
        fontWeight:'600',
        lineHeight:'53.2px'
      }],
      'xl':['31px',{
        fontWeight:'500',
        lineHeight:'43.1px'
      }],
      '4md':['22px',{
        fontWeight:'500',
        lineHeight:'33px'
      }],
      '3md':['22px',{
        fontWeight:'500px',
        lineHeight:'35.2px'
      }],
      '2md':['18px',{
        fontWeight:'500',
        lineHeight:'28.8px'
      }],
      'md':['18px',{
        fontWeight:'600',
        lineHeight:'23.4px'
      }],
      'sm':['16px',{
        fontWeight:'500',
        lineHeight:'25.6px'
      }],
      'base':['16px',{
        fontWeight:'500',
        lineHeight:'25.6px'
      }],
    },
    screens:{
      "sm":"590px",
      "md" : "748px",
      "lg" : "886px",
      "xl" : "988px",
      "2xl" : "1022px",
      "3xl" : "1362px",
      "4xl" : "1432px",
      "xs" : "1122px",
    },
    colors:{
      primary:"#1D1A39",
      secondary:"#1D1B50",
      white:'#FFFFFF',
      gray:'#D3D3D3',
      blue:'#0BAECA',
      red:'#FF0000',
      dark : "#888889"
    },
    extend: {},
    
  },
  plugins: [],
}

