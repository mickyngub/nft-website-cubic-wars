module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "black-ops-one": "Black Ops One",
      },

      backgroundImage: {
        future: "url(./assets/futuristicbg.jpeg)",
      },
      width: {
        "52-%": "52%",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-1%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
