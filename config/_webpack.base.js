'use strict'

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// The following paths are relative to path of `package.json`
var pathSrc = path.resolve('./src')
var pathDist = path.resolve('./dist')
var pathNodeModule = path.resolve('./node_modules')

module.exports = {
  entry: {
    index: './src/index.entry.js'
  },
  output: {
    path: pathDist,
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
    postLoaders: [
      { test: /\.js$/, loaders: ['es3ify-loader'] }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common-[hash].js'),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: function() {
    return [ autoprefixer ]
  },

  resolve: {
    root: [ pathSrc, pathNodeModule ],
    extensions: ['', '.js', '.css', '.less'],
    alias: {
      api: path.join(pathSrc, 'api'),
      component: path.join(pathSrc, 'component'),
      container: path.join(pathSrc, 'container'),
      store: path.join(pathSrc, 'store'),
      util: path.join(pathSrc, 'util')
    }
  }
}
