/* eslint-disable no-var */

var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');

module.exports = {
  target: 'web',
  context: __dirname,
  cache: false,
  devtool: false,
  debug: false,
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    library: pkg.name,
    libraryTarget: 'umd',
    filename: 'index.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader?strictMath']
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(png|jpg)$/,
      loaders: ['url-loader?limit=8192']
    }]
  },
  node: {
    __dirname: true,
    fs: 'empty'
  }
};
