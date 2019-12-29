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
    loading: {
      loginLoading: false,
      logoutLoading: false,
      registerLoading: false,
      getProfileLoading: false,
    },
    errors: {
      loginErrors: {},
      logoutErrors: [],
      registerErrors: {},
    },
    isSignedIn: hasToken(),
  },
  data: {
    userInfo: {},
  },
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
        localStorage.setItem('token', action.data.token);
        draft.local.loading.loginLoading = false;
        draft.local.isSignedIn = true;
        break;
      case constants.login.failure:
        draft.local.errors.loginErrors = action.objectErrors;
        draft.local.loading.loginLoading = false;
        break;

      case constants.register.request:
        draft.local.loading.registerLoading = true;
        draft.local.errors.registerErrors = {};
        break;
      case constants.register.success:
        draft.local.loading.registerLoading = false;
        draft.local.isSignedIn = true;
        break;
      case constants.register.failure:
        draft.local.errors.registerErrors = action.objectErrors;
        draft.local.loading.registerLoading = false;
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
        draft.local.isSignedIn = false;
        draft.local.loading.logoutLoading = false;
        break;

      case constants.getProfile.request:
        draft.local.loading.getProfileLoading = true;
        draft.local.errors.getProfileErrors = [];
        break;
      case constants.getProfile.success:
        draft.local.loading.getProfileLoading = false;
        draft.data.userInfo = action.data.model;
        break;
      case constants.getProfile.failure:
        draft.local.loading.getProfileLoading = false;
        break;

      case constants.clearLoginFormErrors.success:
        draft.local.errors.loginErrors[action.data] = '';
        draft.local.errors.loginErrors.other = '';
        break;

      case constants.clearRegisterFormErrors.success:
        draft.local.errors.registerErrors[action.data] = '';
        draft.local.errors.registerErrors.other = '';
        break;
    }
  });

export default profileReducer;
