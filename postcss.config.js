module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {}, // Enables nesting support
    "postcss-import": {}, // Enables @import support for modular CSS
    "postcss-flexbugs-fixes": {}, // Fixes flexbox issues in older browsers
    "postcss-preset-env": { stage: 1 }, // Adds modern CSS features with fallback support
    "postcss-100vh-fix": {}, // Fixes viewport height inconsistencies on mobile browsers
    "postcss-custom-media": {}, // Adds custom media queries
    "postcss-logical": {}, // Enables logical CSS properties for better RTL support
    "postcss-color-mod-function": {}, // Enables advanced color manipulation in CSS
    "postcss-sort-media-queries": {}, // Optimizes media query ordering for performance
    "postcss-advanced-variables": {}, // Adds support for more complex CSS variables
    "postcss-combine-duplicated-selectors": {}, // Combines duplicated selectors to reduce file size
    "postcss-clean": {}, // Final cleanup plugin for CSS file optimization
    "postcss-purgecss": { // Adds purge feature to remove unused CSS
      content: ["./src/**/*.{html,js,jsx,ts,tsx}"]
    },
    "postcss-sorting": {}, // Sorts CSS properties to maintain consistent order
    "postcss-flexbugs-fixes": {}, // Fixes flexbox bugs across browsers
    "postcss-advanced-variables": {}, // Supports advanced CSS variables for more complex design needs
    "postcss-easy-import": {}, // Simplifies CSS imports, improving maintainability
    "postcss-custom-media-queries": {}, // Adds support for custom media queries for responsive design
    "postcss-optimize": {}, // Optimizes CSS for better performance
  },
};
