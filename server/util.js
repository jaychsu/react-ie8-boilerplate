'use strict'

module.exports = {
  env: {
    current: process.env.NODE_ENV,
    option: [
      'prod',
      'dev'
    ],
    isEnvAvailable: function (envName) {
      if ( envName === undefined ) envName = this.current
      if ( typeof envName !== 'string' ) return false
      return this.option.indexOf(envName) > -1
    }
  }
}
