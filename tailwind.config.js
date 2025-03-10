module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        neutral: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        button: {
          default: "#1D4ED8",
          hover: "#9333EA",
          focus: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["2rem", { lineHeight: "2.5rem" }],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
        "208": "52rem",
        "224": "56rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      transitionDuration: {
        0: "0ms",
        150: "150ms", // Added custom duration for faster animations
        300: "300ms", // Added custom duration for slower animations
        500: "500ms", // Added custom duration for smooth transitions
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
