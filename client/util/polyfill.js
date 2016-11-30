// For IE8
// REF: https://github.com/xcatliu/react-ie8

require('es5-shim')
require('es5-shim/es5-sham')
require('console-polyfill')

require('es6-promise').polyfill()

if ( !Object.assign ) {
  Object.assign = require('object-assign')
}
