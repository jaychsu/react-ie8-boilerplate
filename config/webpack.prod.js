'use strict'

var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var pathSrc = path.resolve('./src')
var pathDist = path.resolve('./dist')
var baseConfig = require('./_webpack.base.js')
var globalConfig = require('./global.prod.js')

module.exports = Object.assign(baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'DEBUG': false,
      }
    }),

    new HtmlWebpackPlugin({
      title: globalConfig.siteInfo.title,
      description: globalConfig.siteInfo.description,
      keywords: globalConfig.siteInfo.keywords,
      template: path.join(pathSrc, 'index.html'),
      filename: 'index.html',
      favicon: path.join(pathSrc, 'favicon.ico'),
      inject: 'body',
      shims: [
        'lib/es5-shim.min.js',
        'lib/es5-sham.min.js',
        'lib/html5shiv.min.js'
      ]
    }),
    new CleanWebpackPlugin([ pathDist ], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from : 'node_modules/es5-shim/es5-shim.min.js' , to: 'lib/es5-shim.min.js'},
      { from : 'node_modules/es5-shim/es5-sham.min.js' , to: 'lib/es5-sham.min.js'},
      { from : 'node_modules/html5shiv/dist/html5shiv.min.js' , to: 'lib/html5shiv.min.js'}
    ]),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', 'exports', 'require', 'module', '_']
      },
      compress: { warnings: false }
    })
  ])
})
