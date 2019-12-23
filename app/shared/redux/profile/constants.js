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
};
