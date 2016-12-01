var baseConfig = require('./_base')
var webpack = require('webpack')

module.exports = Object.assign(baseConfig, {
  debug: true,
  devtool: 'source-map',

  entry: configEntries(baseConfig.entry),
  output: Object.assign(baseConfig.output, {
    publicPath: 'http://localhost:9753/'
  }),
  plugins: baseConfig.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
})

// Tools
function configEntries(entries) {
  var res = {}
  for (var entry in entries) {
    res[entry] = [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?reload=true',
      entries[entry]
    ]
  }
  return res
}
