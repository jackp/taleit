/**
 * Configure Redux store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory, createMemoryHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import errors from './middleware/error';

const reduxRouterMiddleware = syncHistory(__CLIENT__ ? browserHistory : createMemoryHistory());

const middleware = [
  thunk,
  reduxRouterMiddleware,
  errors,
];

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // Enable hot module replacement
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
