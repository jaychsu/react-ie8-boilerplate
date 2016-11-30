'use strict'

var path = require('path')
var express = require('express')
var app = express()

// Set template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './view/'))

app.use(express.static(path.join(__dirname, '../client/')))
require('./route')(app)
require('./public')(app)
