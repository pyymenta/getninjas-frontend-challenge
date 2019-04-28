const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './app.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          'css-loader',
        ]
      }
    ]
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'formGenerator.bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyPlugin([
      { from: './src/img', to: 'img' },
      { from: 'favicon.ico', to: 'favicon.ico' },
    ]),
  ]
};