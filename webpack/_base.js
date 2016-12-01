var path = require('path')
var extractTextPlugin = require('extract-text-webpack-plugin')
var bundleFolderName = 'bundle'

// The following paths are relative to path of `package.json`
module.exports = {
  entry: {
    index: './client/index.entry.js'
  },
  output: {
    path: path.resolve('./client'),
    filename: bundleFolderName + '/[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: extractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.less$/, loader: extractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
    postLoaders: [
      { test: /\.js$/, loaders: ['es3ify-loader'] }
    ]
  },
  plugins: [
    new extractTextPlugin(bundleFolderName + '/[name].css')
  ],

  resolve: {
    fallback: [ path.resolve('./node_modules') ],
    extensions: ['', '.js'],
    alias: {
      api: path.resolve('./client/api'),
      component: path.resolve('./client/component'),
      container: path.resolve('./client/container'),
      store: path.resolve('./client/store'),
      util: path.resolve('./client/util')
    }
  },
  resolveLoader: {
    fallback: [ path.resolve('./node_modules') ]
  }
}
