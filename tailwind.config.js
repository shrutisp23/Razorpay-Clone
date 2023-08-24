/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        white1:"#FFFFFF",
        dotwhite:"#ffffff00",
        'radial-gradient': 'radial-gradient(89.12% 50% at 0% 50%, #FFFFFF 0%, #ffffff00 100%) 100%)',
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
       darkviolet:"#4332a3",  
       lightviolet: "#286cd5",
       neonGreen:"#00FFD1",
       white1:"#FFFFFF",
       dotwhite:"#ffffff00",
       deepviolet:"#2b4486",
       
      }, 
  },

   plugins: [],
}
}
