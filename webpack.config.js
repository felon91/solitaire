const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './js/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
   contentBase: __dirname + '/dist'
  },
  plugins: [
      new HTMLPlugin({
        filename: 'index.html',
        template: './index.html'
      })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}