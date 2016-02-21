/**
 * Web server entry point
 */
const http = require('http');
const koa = require('koa');
const logger = require('koa-logger');
const compress = require('koa-compress');
const debug = require('debug');

const app = koa();

const log = {
  web: debug('taleit:web'),
};

/**
 * Configuration
 */

// Compression
app.use(compress());

// Development configuration
if (app.env === 'development') {
  app.use(logger());
}

/**
 * Routing
 */

// Render react application
app.use(require('./middleware/renderReact')());

/**
 * Start application
 * - In development, this app is imported into a development server
 */
if (app.env !== 'development') {
  const PORT = process.env.WEB_PORT || 3000;

  http
  .createServer(app.callback())
  .listen(PORT, () => {
    log.web(`Listening on port ${PORT} in ${app.env} mode`);
  });
}

module.exports = app;
