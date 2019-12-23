/*
 *
 * Profile actions
 *
 */
import constants from './constants';
import {
  generateActionWithBody,
  // generateEmptyAction,
  // generateActionWithBodyAndId,
  // generateActionWithId,
} from '../../utils/generic-saga';

export default {
  login: generateActionWithBody(constants.login.request),
  logout: generateActionWithBody(constants.logout.request),
};
