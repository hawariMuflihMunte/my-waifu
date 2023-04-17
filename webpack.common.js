const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/stylesheet/'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MyWaifu',
      template: path.resolve(__dirname, 'src/template/template.html'),
      filename: 'index.html',
      meta: {
        'viewport': 'width=device-width, initial-scale=1.0',
        'theme-color': '#007bff'
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        path.resolve(__dirname, 'src/public'),
      ]
    })
  ]
}
