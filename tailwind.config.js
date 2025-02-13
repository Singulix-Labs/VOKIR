module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Added HTML support
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Added custom font
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Adds better form styling
      require("@tailwindcss/typography"), // Improves typography styles
    ],
};
