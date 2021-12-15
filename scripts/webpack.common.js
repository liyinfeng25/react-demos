const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackBar = require('webpackbar')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { PROJECT_PATH, isDev } = require('./config/contant')

// console.log('===>', isDev)

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/index.tsx')
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
    publicPath: '/',
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              output: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|ect|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              output: 'assets/fonts'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@assets': resolve(PROJECT_PATH, './src/assets'),
      '@components': resolve(PROJECT_PATH, './src/components'),
      '@': resolve(PROJECT_PATH, './src'),
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './src/assets'),
          from: '**/*',
          to: resolve(PROJECT_PATH, './dist/assets'),
          toType: 'dir'
        }
      ]
    }),
    new WebpackBar({
      name: isDev ? '-------- 正在启动 --------' : '######## 正在打包 ########',
      color: '#fa8c16',
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     configFile: resolve(PROJECT_PATH, './tsconfig.json')
    //   }
    // }),
    // new HardSourceWebpackPlugin()
  ],
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
}