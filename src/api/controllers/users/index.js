/**
 * Users controller
 */

const usersRouter = require('koa-router')({
  prefix: '/users/',
});

// Get Current User
usersRouter.get('currentUser', function *currentUser() {
  // TODO: Pull from database based on this.state.user.id
  if (this.state.user) {
    this.body = {
      id: 12,
      name: 'Jack Parker',
      email: 'jack@jack.com',
      username: 'jack',
      admin: true,
    };
  } else {
    this.body = null;
  }
});

module.exports = usersRouter;
