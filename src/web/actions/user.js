/**
 * User-related actions
 */

import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

import TaleitAPI from 'utils/taleitAPI';
import {
  UPDATE_USER,
  LOGOUT,
} from 'constants/actionTypes';

export const updateUser = createAction(UPDATE_USER);

// Get current user
export const getCurrentUser = () => (dispatch) => (
  TaleitAPI('/users/currentUser').then(user => {
    dispatch(updateUser(user));
  })
);

// Login
export const login = () => (dispatch) => (
  TaleitAPI('/login').then(response => {
    // Save token in cookie, this will be used to
    // set Authorization headers to API
    cookie.save('taleit-jwt', response.token);

    dispatch(updateUser(response.user));
  })
);

// Logout
export const logout = createAction(LOGOUT, () => {
  cookie.remove('taleit-jwt');
  browserHistory.push('/');
});
