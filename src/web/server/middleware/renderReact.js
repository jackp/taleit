/* eslint-disable no-shadow */
/**
 * Render react application to html string
 */

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

function renderReact() {
  return function *renderReact() {
    // NOTE: These are not imported at top level so that development
    // hot-reloading will work.
    const Html = require('../../containers/Html');
    const routes = require('../../routes');

    const routeContext = yield new Promise((resolve, reject) => {
      match({
        routes,
        location: this.request.url,
      }, (error, redirectUrl, renderProps) => {
        if (redirectUrl) {
          return reject(this.redirect(redirectUrl.pathname + redirectUrl.search));
        } else if (error) {
          return reject(this.throw(error.message));
        }

        // TODO: Setup redial trigger
        resolve(<RouterContext {...renderProps} />);
      });
    });

    this.body = renderToStaticMarkup(
      <Html
        title="Testing"
        content={renderToString(routeContext)}
      />
    );
  };
}

export default renderReact;
