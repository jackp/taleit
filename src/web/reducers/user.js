/**
 * User reducers
 */

const initialState = null;

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}