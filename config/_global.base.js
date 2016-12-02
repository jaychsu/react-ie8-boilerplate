'use strict'

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
    getHost: require('./_host.js'),
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
