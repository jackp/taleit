/**
 * Controllers
 */

const rootRouter = require('koa-router')();

const auth = require('./auth');
const drafts = require('./drafts');
const users = require('./users');

rootRouter
  .use(auth.routes())
  .use(drafts.routes())
  .use(users.routes());

module.exports = rootRouter;
