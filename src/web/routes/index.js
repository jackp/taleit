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
import MessagesView from 'views/Messages';
import NotificationsView from 'views/Notifications';
import SettingsView from 'views/Settings';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="create" component={EditorView} />
    <Route path="discover" component={DiscoverView} />
    <Route path="messages" component={MessagesView} />
    <Route path="notifications" component={NotificationsView} />
    <Route path="settings" component={SettingsView} />
    { /* Important that the AuthorView is last */ }
    <Route path=":username" component={AuthorView} />
  </Route>
);
