/**
 * Auth controller
 * - All authentication-related routes
 */

const jwt = require('jsonwebtoken');
const authRouter = require('koa-router')({
  prefix: '/',
});

// Login
authRouter.get('login', function *login() {
  // TODO: Pull from database
  const user = {
    id: 12,
    name: 'Jack Parker',
    admin: true,
    email: 'jack@jack.com',
  };

  // Sign JWT
  jwt.sign({ admin: user.admin }, process.env.JWT_SECRET, {
    audience: user.id,
    expiresIn: '30d',
  }, token => {
    this.body = {
      user,
      token,
    };
  });
});

// Logout
authRouter.get('logout', function *logout() {
  this.body = 'logout';
});

module.exports = authRouter;
