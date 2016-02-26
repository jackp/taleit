/**
 * Editor-related actions
 */

import { createAction } from 'redux-actions';
import { debounce } from 'lodash';

import TaleitAPI from 'utils/taleitAPI';
import {
  UPDATE_DRAFT,
} from 'constants/actionTypes';

export const updateDraft = createAction(UPDATE_DRAFT);

// Save Draft
let batchedUpdates = {};

const syncWithAPI = debounce(dispatch => {
  TaleitAPI('/drafts/12', {
    method: 'PUT',
    body: JSON.stringify(batchedUpdates),
  }).then((updates) => {
    dispatch(updateDraft(updates));
    batchedUpdates = {};
  });
}, 1000);

export const saveDraft = updates => {
  batchedUpdates = {
    ...batchedUpdates,
    ...updates,
  };

  return syncWithAPI;
};
