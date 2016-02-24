/**
 * Controllers
 */

const rootRouter = require('koa-router')();

const auth = require('./auth');

rootRouter
  .use('/', auth.routes());

module.exports = rootRouter;
