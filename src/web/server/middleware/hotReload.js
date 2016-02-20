/**
 * Hot Reload development server
 */

import debug from 'debug';
import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

import webpackConfig from '~/tools/webpack/config';

const webpackCompiler = webpack(webpackConfig);
const log = {
  hotReload: debug('taleit:hot-reload'),
};

webpackCompiler.plugin('compile', () => {
  log.hotReload('Webpack bundle compiling...');
});

webpackCompiler.plugin('done', (stats) => {

  log.hotReload(`Complilation complete in ${stats.toJson().time}ms. Clearing server cache.`);

  Object.keys(require.cache).forEach(id => {
    if (/[\/\\]src[\/\\]web[\/\\]/.test(id)) delete require.cache[id];
  });
});

function hotReload() {
  const devMiddleware = webpackDevMiddleware(webpackCompiler, {
    quiet: true,
    publicPath: webpackConfig.output.publicPath,
  });

  const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
    quiet: true,
    log: false,
  });

  return function *hotReload(next) {
    yield devMiddleware.call(this, hotMiddleware.call(this, next));
  };
}

export default hotReload;
