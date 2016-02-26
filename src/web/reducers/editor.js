/**
 * Editor reducers
 */

import {
  UPDATE_DRAFT,
} from 'constants/actionTypes';

const initialState = {
  draft: {},
};

export default function editorReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DRAFT:
      return {
        ...state,
        draft: {
          ...state.draft,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}
