const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: './build',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
       test: /\.js$/,
       loader: "babel",
       exclude: /node_modules/
     }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new HtmlWebpackPlugin({
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'}),
  ]
}
