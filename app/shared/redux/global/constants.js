/*
 *
 * Global constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';
const root = 'app/Global/';

export default {
  setIsSidebarOpened: generateActionTypes(root, 'SET_ID_SIDE_BAR_OPENED'),
};
