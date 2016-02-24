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
  const assetsPluginInstance = new AssetsPlugin({
    path: options.dev ? paths.BUILD : paths.DIST,
    filename: 'assets.json',
    update: true,
    prettyPrint: true,
  });

  return [
    /**
     * Client Configuration
     */
    {
      context: paths.SRC,
      devtool: options.dev ? 'cheap-module-eval-source-map' : 'source-map',
      target: 'web',
      resolve: {
        modules: [
          paths.SRC,
          'node_modules',
        ],
        extensions: ['', '.js', '.json'],
      },
      entry: {
        client: [
          ...(options.dev ? [
            'webpack-hot-middleware/client',
          ] : []),
          'babel-polyfill',
          './client',
        ],
      },
      output: {
        path: options.dev ? paths.BUILD : paths.DIST,
        filename: '[name].[hash].js',
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
                'style?sourceMap',
                'css?sourceMap&modules&camelCase=dashes&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
                'postcss',
              ] : [
                 // Production
              ]),
            ],
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ],
      },
      postcss(webpackInstance) {
        return [
          require('postcss-import')({
            path: paths.SRC,
            addDependencyTo: webpackInstance,
          }),
          require('postcss-cssnext'),
          require('postcss-font-magician'),
        ];
      },
      plugins: [
        new webpack.DefinePlugin({
          __DEV__: options.dev,
          __CLIENT__: true,
        }),

        assetsPluginInstance,

        ...(options.dev ? [
          // Development plugins
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin(),
        ] : [
          // Production plugins
        ]),
      ],
    },

    /**
     * Server configuration
     */
    {
      context: paths.SRC,
      devtool: 'source-map',
      target: 'node',
      resolve: {
        modules: [
          paths.SRC,
          'node_modules',
        ],
        extensions: ['', '.js', '.json'],
      },
      externals: [
        /assets\.json$/,
      ],
      entry: {
        server: [
          './server',
        ],
      },
      output: {
        path: options.dev ? paths.BUILD : paths.DIST,
        filename: '[name].[hash].js',
        libraryTarget: 'commonjs2',
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            include: paths.SRC,
            loader: 'babel',
          },
          {
            test: /\.css$/,
            loaders: [
              ...(options.dev ? [
                // Development style handling
                path.resolve(__dirname, './collectStyles'),
                'css?modules&camelCase=dashes&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
                'postcss',
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
      postcss(webpackInstance) {
        return [
          require('postcss-import')({
            path: paths.SRC,
            addDependencyTo: webpackInstance,
          }),
          require('postcss-cssnext'),
          require('postcss-font-magician'),
        ];
      },
      plugins: [
        new webpack.DefinePlugin({
          __DEV__: options.dev,
          __CLIENT__: false,
        }),

        assetsPluginInstance,

        new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
          entryOnly: false,
        }),

        ...(options.dev ? [
          // Development plugins
          new webpack.NoErrorsPlugin(),
        ] : [
          // Production plugins
        ]),
      ],
    },
  ];
};
