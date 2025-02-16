module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Added HTML support
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
          accent: "#F59E0B", // Added accent color
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
          }, // Added neutral grayscale palette
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Added custom font
          heading: ["Poppins", "sans-serif"], // Added heading font
        },
        fontSize: {
          xl: ["1.5rem", { lineHeight: "2rem" }], // Added xl font size for headings
          "2xl": ["2rem", { lineHeight: "2.5rem" }], // Added 2xl size for larger headings
        },
        spacing: {
          '128': '32rem', // Added extra spacing utility
          '144': '36rem',
          '160': '40rem',
          '192': '48rem',
        },
        borderRadius: {
          '4xl': '2rem', // Added larger border radius for soft UI
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Adds better form styling
      require("@tailwindcss/typography"), // Improves typography styles
      require("@tailwindcss/aspect-ratio"), // Adds aspect-ratio utilities
      require("@tailwindcss/line-clamp"), // Added line-clamp for text truncation
    ],
};
