/**
 * Web server entry point
 */

import path from 'path';
import http from 'http';
import koa from 'koa';
import logger from 'koa-logger';
import compress from 'koa-compress';
import favicon from 'koa-favicon';
import debug from 'debug';

import React from 'react';
import Helmet from 'react-helmet';
import cookie from 'react-cookie';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { trigger } from 'redial';

import Html from '../containers/Html';
import routes from '../routes';
import configureStore from '../store';
import assets from './assets.json';

const app = koa();

const log = {
  web: debug('taleit:web'),
};

/**
 * Configuration
 */

// Compression
app.use(compress());

// Serve favicon
app.use(favicon(path.resolve(__dirname, '../public/favicon.ico')));

// Development configuration
if (app.env === 'development') {
  app.use(logger());
}

/**
 * Routing
 */

// Render react application
app.use(function *renderReact() {
  // Isomorphic cookie reading
  // Used in TaleitAPI to get JWT token
  cookie.setRawCookie(this.headers.cookie);

  // Create store
  const store = configureStore();
  const { dispatch, getState } = store;

  // Get route content
  const routeContent = yield new Promise((resolve, reject) => {
    match({
      routes,
      location: this.request.url,
    }, (error, redirectUrl, renderProps) => {
      if (redirectUrl) {
        return reject(this.redirect(redirectUrl.pathname + redirectUrl.search));
      } else if (error) {
        return reject(this.throw(error.message));
      }

      // Trigger "prefetch" event on all components to prefill needed state
      trigger('prefetch', renderProps.components, {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch,
      }).then(() => {
        resolve(renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ));
      });
    });
  });

  // Render html
  this.body = renderToStaticMarkup(
    <Html
      initialState={getState()}
      serverStyles={global.__STYLE_COLLECTOR__}
      assets={assets.client}
      head={Helmet.rewind()}
      content={routeContent}
    />
  );
});

/**
 * Start application
 * - In development, this app is imported into a development server
 */
if (app.env !== 'development') {
  const PORT = process.env.WEB_PORT || 3000;

  http
  .createServer(app.callback())
  .listen(PORT, () => {
    log.web(`Listening on port ${PORT} in ${app.env} mode`);
  });
}

export default app;
