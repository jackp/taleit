/**
 * User-related actions
 */

import { createAction } from 'redux-actions';
import TaleitAPI from 'utils/taleitAPI';

import { UPDATE_USER } from 'constants/actionTypes';

export const updateUser = createAction(UPDATE_USER);

export const getUser = () => (dispatch) => (
  TaleitAPI('/login').then(user => {
    dispatch(updateUser(user));
  })
);
