const path = require('path');

module.exports = {
  // entry point to application
  entry: './scripts-js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/, // regExp for .js
      exclude: /node_modules/, // exclude these files
      loader: 'babel-loader', // use the babel loader
      query: {
        presets: ['es2015'] // apply the es2016 presets
      }
    }]
  }
};
