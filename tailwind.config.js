/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rgb(31 29 29) white"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "8px",
          },
          "&::-webkit-scrollbar-track" : {
            background : "black",
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "rgb(80 80 80)",
            borderRadius : "40px",
            paddingLeft :'20px'
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}