'use strict'

var path = require('path')
var express = require('express')
var app = express()
var util = require('./util')

// Set template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './view/'))

// Enables webpack on dev env
var webpack = require('webpack')
var webpackConfig
var compiler

if ( util.isEnvAvailable()
  && util.env.current === 'dev') {
  webpackConfig = require('../webpack/dev.js')
  compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    // public path should be the same with webpack config
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    stats: { colors: true }
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

// Run application
app.use(express.static(path.join(__dirname, '../client/')))
require('./route')(app)
require('./public')(app)
