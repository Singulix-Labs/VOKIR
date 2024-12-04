module.exports = {
  plugins: {
    tailwindcss: {}, 
    autoprefixer: {}, 
    "postcss-nested": {}, // Enables nesting support
    "postcss-import": {}, // Enables @import support for modular CSS
    "postcss-flexbugs-fixes": {}, // Fixes flexbox issues in older browsers
    "postcss-preset-env": { stage: 1 }, // Adds modern CSS features with fallback support
    "postcss-100vh-fix": {}, // Fixes viewport height inconsistencies on mobile browsers
    "postcss-gap-properties": {}, // Adds support for gap in IE and Edge
    "postcss-custom-media": {}, // Adds custom media queries

    // New addition for logical properties and directional styles
    "postcss-logical": {}, // Enables logical CSS properties for better RTL support
  },
};
