/**
 * UI reducers
 */

import {
  SHOW_HEADER,
  HIDE_HEADER,
} from 'constants/actionTypes';

const initialState = {
  showHeader: true,
};

export default function uiReducers(state = initialState, action) {
  switch (action.type) {
    case SHOW_HEADER:
      return {
        ...state,
        showHeader: true,
      };

    case HIDE_HEADER:
      return {
        ...state,
        showHeader: false,
      };

    default:
      return state;
  }
}
