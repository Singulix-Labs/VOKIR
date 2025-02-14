module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Added HTML support
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
          accent: "#F59E0B", // Added accent color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Added custom font
          heading: ["Poppins", "sans-serif"], // Added heading font
        },
        spacing: {
          '128': '32rem', // Added extra spacing utility
          '144': '36rem',
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Adds better form styling
      require("@tailwindcss/typography"), // Improves typography styles
      require("@tailwindcss/aspect-ratio"), // Adds aspect-ratio utilities
    ],
};
