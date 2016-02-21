/**
 * Configure Redux store
 */

import { createStore, compose } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
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
