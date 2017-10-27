/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    publicPath: '/',
    port: 5555,
    contentBase: path.join(__dirname, 'public')
  },
  entry: [path.join(__dirname, './index.js')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader', 
            options: {
              configFile: "tsconfig.web.json"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-native': 'react-native-web',
      'native': path.resolve(__dirname, '../native'),
      'shared': path.resolve(__dirname, '../shared')
    }
  }
}
