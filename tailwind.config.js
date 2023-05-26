const { black, white, neutral } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      black,
      white,
      neutral,
      danger: "#900",
      success: "#228b22",
      text: {
        100: "#6b7177",
        200: "#222",
      },
      primary: {
        50: "#eafaff",
        100: "#d0f3ff",
        200: "#abecff",
        300: "#72e4ff",
        400: "#30d0ff",
        500: "#00afff",
        600: "#0087ff",
        700: "#006dff",
        800: "#005bdd",
        900: "#0052ac",
        950: "#032751",
      },
      secondary: {
        50: "#effefc",
        100: "#cafdf8",
        200: "#95faf2",
        300: "#59efea",
        400: "#27dada",
        500: "#0ebbbe",
        600: "#08999e",
        700: "#0b757a",
        800: "#0e5c61",
        900: "#114c50",
        950: "#022c31",
      },
      accent: {
        50: "#f0fdf3",
        100: "#ddfbe5",
        200: "#bdf5cd",
        300: "#7cea9c",
        400: "#4eda77",
        500: "#27c054",
        600: "#1a9f42",
        700: "#187d37",
        800: "#186330",
        900: "#165129",
        950: "#062d13",
      },
    },
    fontFamily: {
      main: ["var(--font-main)"],
    },
    extend: {
      backgroundImage: {
        providerGradient: "linear-gradient(180deg, #032751 0%, #114c50 60%)",
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
