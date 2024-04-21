module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.3)",
      },
      backgroundImage: () => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.03%)",
      }),
      fontFamailပ: {
        playfair: ['"Playfair Display"', "sans"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1050px",
      lg: "1300px",
      xl: "1570px",
    },
  },
  plugins: [],
};
