/* eslint-disable no-var */
var webpack = require('webpack');
var config = require('./webpack.config');

config.cache = true;
config.debug = true;
config.devtool = 'eval';

config.entry.unshift(
  'webpack/hot/dev-server'
);

config.output.hotUpdateMainFilename = 'update/[hash]/update.json';
config.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.module.preLoaders = [{
  test: /\.(js)$/,
  exclude: /node_modules/,
  loader: 'eslint-loader'
}];


config.devServer = {
  contentBase: './dist',
  host: 'localhost',
  port: 3000,
  hot: true,
  inline: true,
  lazy: false,
  quiet: false,
  noInfo: false,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: {
    colors: true
  }
};

module.exports = config;
