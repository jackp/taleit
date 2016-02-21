/**
 * Web server entry point
 * - Written in Node ES6 (not processed by babel)
 */

require('dotenv').config({ silent: true });
require('babel-register');
require('babel-polyfill');

const http = require('http');
const koa = require('koa');
const logger = require('koa-logger');
const compress = require('koa-compress');
const debug = require('debug');

const app = koa();

const log = {
  web: debug('taleit:web'),
};

// Compression
app.use(compress());

// Set globals to match webpack configuration
GLOBAL.__DEV__ = app.env === 'development';

// Development configuration
if (app.env === 'development') {
  app.use(logger());
  app.use(require('./middleware/hotReload')());
}

// Render react application
app.use(require('./middleware/renderReact')());

// Start application
const PORT = process.env.WEB_PORT || 3000;

http
.createServer(app.callback())
.listen(PORT, () => {
  log.web(`Listening on port ${PORT} in ${app.env} mode`);
});
