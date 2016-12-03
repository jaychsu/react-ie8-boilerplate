'use strict'

var path = require('path')
var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var pathSrc = path.resolve('./src')
var baseConfig = require('./_webpack.base.js')
var globalConfig = require('./global.dev.js')

module.exports = Object.assign(baseConfig, {
  debug: true,
  devtool: 'eval-source-map',

  plugins: baseConfig.plugins.concat([
    new HtmlWebpackPlugin({
      title: globalConfig.siteInfo.title,
      description: globalConfig.siteInfo.description,
      keywords: globalConfig.siteInfo.keywords,
      template: path.join(pathSrc, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      shims: [
        'node_modules/es5-shim/es5-shim.min.js',
        'node_modules/es5-shim/es5-sham.min.js',
        'node_modules/html5shiv/dist/html5shiv.min.js'
      ]
    }),
    new OpenBrowserPlugin({
      url: globalConfig.server.getUrl()
    })
  ]),
  devServer: {
    historyApiFallback: true,
    hot: true,
    stats: 'erros-only',
    host: globalConfig.server.getHost(),
    port: globalConfig.server.getPort()
  }
})
