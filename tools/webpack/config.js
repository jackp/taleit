/**
 * Webpack configuration
 * - Used for bundling of client application
 * - https://webpack.github.io/docs/configuration.html
 */

const path = require('path');
const webpack = require('webpack');

const options = {
  DEV: process.env.NODE_ENV !== 'production',
};

module.exports = {
  context: path.resolve(__dirname, '../../src/web'),
  devTool: options.DEV ? 'cheap-module-eval-source-map' : 'source-map',
  entry: [
    ...(options.DEV ? [
      'webpack-hot-middleware/client',
    ] : []),
    'babel-polyfill',
    './client',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

    ...(options.DEV ? [
      // Development plugins
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : [
      // Production plugins
    ]),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          env: {
            development: {
              presets: ['react-hmre'],
            },
          },
        },
      },
    ],
  },
};
