/**
 * Web client entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';
import configureStore from '../store';
import 'styles/global.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </Provider>,
  document.getElementById('root')
);

// Delete serverStyles, if they exist
const serverStyles = document.getElementById('serverStyles');
if (serverStyles) serverStyles.remove();
