/**
 * Webpack configuration
 * - Used for bundling of client & server application
 * - https://webpack.github.io/docs/configuration.html
 * - Webpack 2.0 features described at https://gist.github.com/sokra/27b24881210b56bbaff7
 */

const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, '../../src/web'),
  BUILD: path.resolve(__dirname, '../../build'),
  DIST: path.resolve(__dirname, '../../dist'),
};

module.exports = function webpackConfig(options) {
  return {
    context: paths.SRC,
    devTool: options.dev && options.client ? 'cheap-module-eval-source-map' : 'source-map',
    target: options.client ? 'web' : 'node',
    resolve: {
      modules: [
        paths.SRC,
        'node_modules',
      ],
    },
    entry: Object.assign({},
      options.client ? {
        client: [
          ...(options.dev ? [
            'webpack-hot-middleware/client',
          ] : []),
          'babel-polyfill',
          './client',
        ],
      } : {},
      options.server ? {
        server: [
          'babel-polyfill',
          './server',
        ],
      } : {}
    ),
    output: {
      path: options.dev ? paths.BUILD : paths.DIST,
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: paths.SRC,
          loader: 'babel',
          query: {
            env: {
              development: {
                presets: ['react-hmre'],
              },
            },
          },
        },
        {
          test: /\.css$/,
          loaders: [
            ...(options.dev ? [
              // Development style handling
              ...(options.client ? [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
                'postcss',
              ] : [
                // Server handling
                'css/locals?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
                'postcss',
              ]),
            ] : [
              // Production style handling
              // TODO: Use extract text plugin
            ]),
          ],
        },
        {
          test: /\.json$/,
          loader: 'json',
        },
      ],
    },
    postcss() {
      return [
        require('postcss-cssnext'),
      ];
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: options.dev,
        __CLIENT__: options.client,
      }),

      new AssetsPlugin({
        path: options.dev ? paths.BUILD : paths.DIST,
        update: true,
      }),

      ...(options.dev ? [
        // Development plugins
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ] : [
        // Production plugins
      ]),
    ],
  };
};
