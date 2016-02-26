/**
 * UI-related actions
 */

import { createAction } from 'redux-actions';
import {
  SHOW_HEADER,
  HIDE_HEADER,
} from 'constants/actionTypes';

export const showHeader = createAction(SHOW_HEADER);
export const hideHeader = createAction(HIDE_HEADER);
