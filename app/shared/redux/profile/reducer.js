/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as CONSTANTS from './constants';

export const initialState = {
  local: {
    loginLoading: false,
    isSignedIn: false,
  },
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CONSTANTS.DEFAULT_ACTION:
        break;
    }
  });

export default profileReducer;
