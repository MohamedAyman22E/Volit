/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      1400: "1400px",
      1300: "1300px",
      1265: "1265px",
      1245: "1245px",
      1210: "1210px",
      1200: "1200px",
      1100: "1100px",
      1000: "1000px",
      900: "900px",
      800: "800px",
      712: "712px",
      700: "700px",
      600: "600px",
      550: "550px",
      500: "500px",
      440: "440px",
      400: "400px",
      300: "300px",
      280: "280px",
    },
    colors: {
      home: "#8dc541",
      mainColor: "#FFF",
      black: "#000",
      borderColor: "rgba(255,255,255,.3)",
    },
    borderRadius: {
      borderRadius: "20px",
      borderNone: "0px",
    },
    width: {
      motorHome: "800px",
      with: "100%",
      withFlex: "50%",
      borderRadius: "50%",
    },
    gridTemplateColumns: {
      16: "repeat(3, minmax(0, 1fr))",

      // 'footer': '200px minmax(900px, 1fr) 100px',
      footer: "repeat(auto-fit, minmax(auto,200px)",
    },
    boxShadow: {
      external: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },

    extend: {},
  },
  plugins: [],
};
