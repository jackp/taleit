/**
 * Auth controller
 * - All authentication-related routes
 */

const authRouter = require('koa-router')();

// Login
authRouter.get('login', function *login() {
  this.body = { name: 'Jack Parker' };
});

// Logout
authRouter.get('logout', function *logout() {
  this.body = 'logout';
});

module.exports = authRouter;
