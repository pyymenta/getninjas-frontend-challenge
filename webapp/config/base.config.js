const path = require('path');

module.exports = {
  entry: {
    app: './index.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      use: 'babel-loader'
    }]
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'formGenerator.bundle.js'
  }
};