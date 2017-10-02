var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

var DIST_PATH = path.resolve( __dirname, 'dist' );
var SOURCE_PATH = path.resolve( __dirname, 'src' );

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: SOURCE_PATH + "/app/index.js",
    html: SOURCE_PATH + "/app/index.html"
  },
  output: {
    filename: 'bundle.js',
    path: DIST_PATH,
    publicPath: "/dist/"
  },
  module: {
    loaders: [
      {
        test:  [/.jsx?$/, /\.es6$/],
        include: SOURCE_PATH,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader", "eslint", "es2015", "react", "stage-2"]
      },
      {
        test: /\.css$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: "file?name=[name].[ext]",
      },{
        test: /\.scss$/i,
           loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      }),
      new webpack.ProvidePlugin({
           "React": "react"
      })
  ]
}
