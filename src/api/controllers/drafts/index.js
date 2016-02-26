/**
 * Drafts controller
 */

const draftsRouter = require('koa-router')({
  prefix: '/drafts/',
});

// Update Draft
draftsRouter.put(':id', function *updateDraft() {
  this.body = this.request.body;
});

module.exports = draftsRouter;
