/**
 * Root Reducer
 */

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import ui from './ui';
import user from './user';

export default combineReducers(Object.assign({}, {
  routing: routeReducer,
  ui,
  user,
}));
