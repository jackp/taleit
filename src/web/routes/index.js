/**
 * Application routes
 * - Shared between client & server
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import HomeView from '../views/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
  </Route>
);
