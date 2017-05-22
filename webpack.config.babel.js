
import webpack from 'webpack'
import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const nodeEnv = {
  value: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV !== 'production',
  isProduction: process.env.NODE_ENV === 'production',
}

const config = {

  entry: [
    'babel-polyfill',
    resolve('./app/index'),
  ],

  output: {
    path: resolve('./public'),
    filename: 'webpack-bundle.js',
  },

  devServer: {
    contentBase: resolve("./public"),
    compress: true,
    port: 9000,
  },

  resolve: {
    modules: ['node_modules', 'vendor'],
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[hash:base64:5]',
            },
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(nodeEnv.value) } }),
    new ExtractTextPlugin({
      filename: 'webpack-bundle.css',
      disable: false,
      allChunks: true,
    }),
  ],

  devtool: 'cheap-module-inline-source-map',

}

/* eslint-disable global-require */
if (nodeEnv.isDevelopment) {
  module.exports = {
    ...config,
    plugins: [
      ...config.plugins,
    ],
  }
} else if (nodeEnv.isProduction) {
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
  module.exports = {
    ...config,
    plugins: [
      ...config.plugins,
      new UglifyJSPlugin(),
    ],
  }
}
