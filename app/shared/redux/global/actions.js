/*
 *
 * Global actions
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
  setIsSidebarOpened: generateActionWithBody(
    constants.setIsSidebarOpened.request,
  ),
};
