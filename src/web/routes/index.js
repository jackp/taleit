/**
 * Application routes
 * - Shared between client & server
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import IndexView from 'views/Index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
  </Route>
);
