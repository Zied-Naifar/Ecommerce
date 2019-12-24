/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import { hasToken } from 'shared/utils/access-token';
import constants from './constants';

export const initialState = {
  local: {
    loading: { loginLoading: false, logoutLoading: false },
    errors: { loginErrors: {}, logoutErrors: [] },
    isSignedIn: hasToken(),
  },

  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.login.request:
        draft.local.loading.loginLoading = true;
        draft.local.errors.loginErrors = {};
        break;
      case constants.login.success:
        draft.local.loading.loginLoading = false;
        draft.local.isSignedIn = true;
        break;
      case constants.login.failure:
        draft.local.errors.loginErrors = action.objectErrors;
        draft.local.loading.loginLoading = false;
        break;

      case constants.logout.request:
        draft.local.loading.logoutLoading = true;
        draft.local.errors.logoutErrors = [];
        break;
      case constants.logout.success:
        draft.local.loading.logoutLoading = false;
        localStorage.removeItem('expires');
        localStorage.removeItem('token');
        localStorage.removeItem('tracert-session-key');
        draft.local.isSignedIn = false;
        break;
      case constants.logout.failure:
        draft.local.errors.logoutErrors = action.objectErrors;
        draft.local.loading.logoutLoading = false;
        break;

      case constants.clearLoginFormErrors.success:
        draft.local.errors.loginErrors[action.data] = '';

        break;

      case constants.clearRegisterFormErrors.success:
        draft.local.errors.userRegisterErrors[action.data] = '';
        break;
    }
  });

export default profileReducer;
