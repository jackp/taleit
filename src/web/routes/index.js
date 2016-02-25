/**
 * Application routes
 * - Shared between client & server
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import IndexView from 'views/Index';
import EditorView from 'views/Editor';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="create" component={EditorView} />
  </Route>
);
