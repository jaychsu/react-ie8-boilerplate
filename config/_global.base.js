'use strict'

var os = require('os')

module.exports = {
  siteInfo: {
    title: 'Autodesk Accounts',
    description: 'Manage Autodesk account settings.',
    keywords: 'Autodesk account settings',
  },
  server: {
    currentProtocol: 'http',
    httpPort: 9753,
    httpsPort: 9751,
    getHost: getHost,
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
