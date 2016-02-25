/**
 * User reducers
 */

import { UPDATE_USER } from 'constants/actionTypes';

const initialState = null;

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      if (action.payload) {
        return {
          ...state,
          ...action.payload,
        };
      }

      return state;

    default:
      return state;
  }
}
