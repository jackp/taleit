/**
 * Controllers
 */

const rootRouter = require('koa-router')();

const auth = require('./auth');
const users = require('./users');

rootRouter
  .use(auth.routes())
  .use(users.routes());

module.exports = rootRouter;
