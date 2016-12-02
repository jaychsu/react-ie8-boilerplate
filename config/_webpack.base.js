'use strict'

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// The following paths are relative to path of `package.json`
var pathClient = path.resolve('./src')
var pathNodeModule = path.resolve('./node_modules')
var dirBundle = 'bundle'

module.exports = {
  entry: {
    index: './src/index.entry.js'
  },
  output: {
    path: pathClient,
    filename: dirBundle + '/[name]-[hash].js'
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
    new ExtractTextPlugin(dirBundle + '/[name]-[hash].css')
  ],
  postcss: function() {
    return [ autoprefixer ]
  },

  resolve: {
    root: [ pathClient, pathNodeModule ],
    extensions: ['', '.js', '.css', '.less'],
    alias: {
      api: path.join(pathClient, 'api'),
      component: path.join(pathClient, 'component'),
      container: path.join(pathClient, 'container'),
      store: path.join(pathClient, 'store'),
      util: path.join(pathClient, 'util')
    }
  }
}
