/*
 *
 * Profile constants
 *
 */
import { generateActionTypes } from '../../utils/generic-saga';
const root = 'app/Profile/';

export default {
  login: generateActionTypes(root, 'LOGIN'),
  logout: generateActionTypes(root, 'LOGOUT'),
  clearLoginFormErrors: generateActionTypes(root, 'CLEAR_LOGIN_FORM_ERRORS'),
  clearRegisterFormErrors: generateActionTypes(
    root,
    'CLEAR_REGISTER_FORM_ERRORS',
  ),
  register: generateActionTypes(root, 'REGISTER'),
  getProfile: generateActionTypes(root, 'GET_PROFILE'),
};
