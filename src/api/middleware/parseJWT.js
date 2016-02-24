/**
 * Parse JWT and add to context
 */

const jwt = require('jsonwebtoken');

module.exports = function *parseJWT(next) {
  if (this.headers.authorization) {
    const jwtMatch = this.headers.authorization.match(/^Bearer\s(.*)$/);

    if (jwtMatch) {
      const decoded = jwt.verify(jwtMatch[1], process.env.JWT_SECRET);

      this.state.user = {
        id: decoded.aud,
        admin: decoded.admin,
      };
    }
  }

  yield next;
};
