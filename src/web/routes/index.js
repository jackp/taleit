/**
 * Application routes
 * - Shared between client & server
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import IndexView from 'views/Index';
import AuthorView from 'views/author';
import DiscoverView from 'views/Discover';
import EditorView from 'views/Editor';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="discover" component={DiscoverView} />
    <Route path="create" component={EditorView} />
    { /* Important that the AuthorView is last */ }
    <Route path=":username" component={AuthorView} />
  </Route>
);
