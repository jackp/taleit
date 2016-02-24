/**
 * Auth controller
 * - All authentication-related routes
 */

const authRouter = require('koa-router')();

// Login
authRouter.get('login', function *login() {
  this.body = 'login route';
});

// Logout
authRouter.get('logout', function *logout() {
  this.body = 'logout';
});

module.exports = authRouter;
