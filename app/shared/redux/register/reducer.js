/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import * as CONSTANTS from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CONSTANTS.DEFAULT_ACTION:
        break;
    }
  });

export default registerReducer;
