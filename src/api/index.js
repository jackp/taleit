/**
 * TaleIt API Server
 */

require('dotenv').config({ silent: true });

const http = require('http');
const koa = require('koa');
const logger = require('koa-logger');
const cors = require('koa-cors');
const debug = require('debug');

const controllers = require('./controllers');

const app = koa();

const log = {
  api: debug('taleit:api'),
};

// Development configuration
if (app.env === 'development') {
  app.use(logger());
}

// CORS configuration
app.use(cors());

// Error handling
app.use(function *errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    log.api(err);

    this.status = err.status || 500;
    this.body = { error: err.message };
    this.app.emit('error', err, this);
  }
});

// Handle JWT
app.use(require('./middleware/parseJWT'));

// Mount controllers
app.use(controllers.routes());
app.use(controllers.allowedMethods());

// Start server
const PORT = process.env.API_PORT || 3001;

http
.createServer(app.callback())
.listen(PORT, () => {
  log.api(`Listening on port ${PORT} in ${app.env} mode`);
});
