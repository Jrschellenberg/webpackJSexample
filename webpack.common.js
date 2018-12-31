const path = require('path');

module.exports = {
  entry: {
    // BMSPolyfills: './polyfills/polyfills.js', // IF YOU REQUIRE POLYFILLS, uncomment and gt file location for more information
    BMSTestModule: './builds/BMSTestModule.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../assets'),
  },
};
