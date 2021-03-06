const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {
  assetDir,
  componentDir,
  mixinDir,
  pageDir,
  publicDir,
  routerDir,
  staticDir,
  storeDir
} = require('../projectDirs')

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  devtool: isProd ?
    false : '#cheap-module-source-map',
  output: {
    path: publicDir,
    publicPath: '/public/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'assets': assetDir,
      'components': componentDir,
      'mixins': mixinDir,
      'pages': pageDir,
      'public': publicDir,
      'router': routerDir,
      'static': staticDir,
      'store': storeDir,
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/
    })
  ] : [
    new FriendlyErrorsPlugin()
  ]
}