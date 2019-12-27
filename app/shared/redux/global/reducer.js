/*
 *
 * Global reducer
 *
 */
import produce from 'immer';
import constants from './constants';

export const initialState = {
  local: { isSidebarOpened: true },
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.setIsSidebarOpened.success:
        draft.local.isSidebarOpened = action.data;
        break;
    }
  });

export default globalReducer;
