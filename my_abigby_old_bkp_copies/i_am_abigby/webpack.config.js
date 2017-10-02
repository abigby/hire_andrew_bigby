var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HTMLWebpackPlugin = require('html-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');

//Distribution Directory - Copied Transpiled & Bundled Files Location-Production Build
var DIST_DIR = path.resolve(__dirname, "dist");
//Source Directory -- Entry Files/Source Code Location -- To Copy From
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  //First file to start bundling from
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  watch: true,
  module: {
    preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'jshint-loader'
    }],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: 'node_modules',
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
          test: /\.styl$/,
          exclude: /node_modules/,
          loader: 'style!css?sourceMap!stylus?resolve url',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
           loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        // loader: ExtractTextPlugin.extract(
        //     'style', // The backup style loader
        //     'css?sourceMap!sass?sourceMap',
        //     'css!sass' // loaders to preprocess CSS
        // )
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: SRC_DIR,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
        loader: 'url?limit=50000'
      }
    ]
  },
  externals: {
    // 'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./css")]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
      new ExtractTextPlugin("[name].css", {
              allChunks: true
      }),
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

module.exports = config;
