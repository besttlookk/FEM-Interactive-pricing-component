module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/layouts/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },

      colors: {
        primary: "hsl(174, 86%, 45%)", // Slider background
        primaryLight: "hsl(174, 77%, 80%)", // full slider bar
        secondary: "hsl(15, 100%, 70%)", // discound-text
        secondaryLight: "hsl(14, 92%, 95%)", // discount bg
        cta: "hsl(226, 100%, 87%)", //cta text
        toggleBG: "hsl(223, 50%, 87%)",
        emptySlider: "hsl(224, 65%, 95%)",
        mainBg: "hsl(230, 100%, 99%)",
        para: "hsl(225, 20%, 60%)",
        head: "hsl(227, 35%, 25%)", // head + cta bg
      },

      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(220px, 1fr))",
      },

      backgroundImage: {
        pattern: "url('/pattern-circles.svg')",
      },

      spacing: {
        1.5: "6px",
      },

      width: {
        "90w": "90vw",
        18: "4.2rem",
      },
      boxShadow: {
        "3xl": "0 15px 60px -15px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
