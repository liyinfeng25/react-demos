const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { SERVER_HOST, SERVER_PORT } = require('./config/contant.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: SERVER_PORT,
    open: true,
    hot: true,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    disableHostCheck: true,
    compress: false,
    historyApiFallback: true,
  }
})