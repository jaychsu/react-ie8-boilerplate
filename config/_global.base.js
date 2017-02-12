'use strict'

var os = require('os')

module.exports = {
  siteInfo: {
    title: 'React IE8 Boilerplate',
    description: 'Quickly build web app via React and related tech.',
    keywords: 'react ie8 boilerplate',
  },
  server: {
    currentProtocol: 'http',
    httpPort: 9753,
    httpsPort: 9751,
    getHost: function () {
      // TODO: this is a temporary hack since `getHost()` in Docker will return vm's host.
      return '0.0.0.0'
    },
    getPort: function () {
      return (this.currentProtocol === 'https')
        ? this.httpsPort
        : this.httpPort
    },
    getUrl: function () {
      return (this.currentProtocol === 'https')
        ? ['https://', this.getHost(), ':', this.httpsPort, '/'].join('')
        : ['http://', this.getHost(), ':', this.httpPort, '/'].join('')
    }
  }
}

// Tools
function getHost() {
  var ifaces = os.networkInterfaces()
  var ip = ''
  var result = []

  for(var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if(ip === '' && details.family === 'IPv4' && !details.internal) {
        ip = details.address
        return;
      }
    })
  }

  return ip || '127.0.0.1'
}
