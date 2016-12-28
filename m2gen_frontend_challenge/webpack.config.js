var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './index.js',
  output: {path: __dirname, filename: 'bundle.js'},
  watch: true,

  module: {
    preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
    }],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: 'node_modules',
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
        // loader: ExtractTextPlugin.extract('css!sass')
        // loader: "css-loader!sass-loader"
        loader: ExtractTextPlugin.extract(
            'style', // The backup style loader
            'css?sourceMap!sass?sourceMap',
            'css!sass' // loaders to preprocess CSS
        )
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
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
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
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
      }),
  ]
}
