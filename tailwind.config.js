module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        main: {
          50: "#F0FFFA",
          100: "#DBFFF4",
          200: "#B3FFE8",
          300: "#75FFD6",
          400: "#00FAAF",
          500: "#00F2A9",
          600: "#00DB9A",
          700: "#00C288",
          800: "#00A372",
          900: "#007552",
        },
      },
      animation: {
        wave1: "wave1 15s ease-in-out infinite",
        wave2: "wave2 15s ease-in-out infinite",
        wave3: "wave3 15s ease-in-out infinite",
      },
      keyframes: {
        wave1: {
          "25%": {
            "transform-origin": "0 100%",
            transform: "scale(1.3, 1.1)",
          },
          "75%": {
            transform: "scale(1.15, 0.9)",
            "transform-origin": "100% 100%",
          },
        },
        wave2: {
          "25%": {
            "transform-origin": "100% 100%",
          },
          "50%": {
            transform: "scale(1.2, 0.8)",
          },
          "75%": {
            "transform-origin": "0 100%",
          },
        },
        wave3: {
          "25%": {
            "transform-origin": "0 100%",
          },
          "50%": {
            transform: "scale(1.1, 0.9)",
          },
          "75%": {
            "transform-origin": "100% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
