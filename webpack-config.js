const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'lib');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');
const PathRewriterPlugin = require('webpack-path-rewriter');
const config = {
  entry: ['babel-polyfill', path.join(__dirname, '/src/index.js')],
  resolve: {
    root: path.resolve(__dirname),
  },
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'index.js' // Name of output file
  },
  plugins: [
    // http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false
    }),
  /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: true
      }
    }), */
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    new PathRewriterPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath]
      }
    ]
  }
};

module.exports = config;
