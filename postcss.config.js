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
    
    // Replaced deprecated postcss-color-function
    "postcss-color-mod-function": {}, // Enables advanced color manipulation in CSS
    
    // New addition
    "postcss-sort-media-queries": {}, // Optimizes media query ordering for performance
  },
};
