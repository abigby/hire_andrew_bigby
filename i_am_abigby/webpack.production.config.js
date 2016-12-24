var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  //Removes all console.log from project in production build
  loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
