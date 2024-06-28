/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins_bold: ["Poppins-Bold"],
        poppins_medium: ["Poppins-Medium"],
        poppins_regular: ["Poppins-Regular"],
        poppins_thin : ["Poppins-Thin"],
        poppins_light : ["Poppins-Light"]
      },
      screens:{
        sm:'350px'
      }
    },
  },
  plugins: [],
}

