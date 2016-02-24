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

app.use(cors());

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
