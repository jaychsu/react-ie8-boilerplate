'use strict'

var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, '../client/')))
require('./route')(app)
require('./public')(app)
