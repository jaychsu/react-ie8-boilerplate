var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader'), exclude: /node_modules/ },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'), exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ],
    postLoaders: [
      { test: /\.js$/, loaders: ['es3ify-loader'] }
    ]
  },
  plugins: [
    new ExtractTextPlugin(bundleFolderName + '/[name].css')
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
