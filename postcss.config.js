module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-nested": {}, // Enable nesting support
      "postcss-import": {}, // Enable @import support for modular CSS
      "postcss-flexbugs-fixes": {}, // Fixes flexbox issues in older browsers
      "postcss-preset-env": { stage: 1 } // Adds modern CSS features with fallback support
    },
};
