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
    filename: "bundle.js",
    path: DIST_PATH,
    publicPath: "/dist/"
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /\.es6$/],
        loader: 'babel-loader',
        include: SOURCE_PATH,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader", "eslint"],
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2'
          ]
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },{
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },{
        test: /\.scss$/,
           loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },{
          test: /\.styl$/,
          exclude: /node_modules/,
          loader: 'style!css?sourceMap!stylus?resolve url',
      },
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },{
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
      },{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },{
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
    // alias: {
    //     jquery: "./node_modules/jquery/dist/jquery.min.js"
    // }
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