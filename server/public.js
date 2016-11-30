'use strict'

module.exports = function (app) {
  require('http').Server(app).listen(9753, function (err) {
    if (err) {
      console.log(err)
      return
    }

    console.log('Running application on `http://localhost:9753`')
  })
}
