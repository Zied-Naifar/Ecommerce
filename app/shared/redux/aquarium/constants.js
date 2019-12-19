/*
 *
 * Aquarium constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/Aquarium/'

export default {
  fetchAquariums: generateActionTypes(root, 'FETCH_AQUARIUMS'),
  addAquarium: generateActionTypes(root, 'ADD_AQUARIUM'),
  updateAquarium: generateActionTypes(root, 'UPDATE_AQUARIUM'),
  deleteAquarium: generateActionTypes(root, 'DELETE_AQUARIUM'),
  showModal: generateActionTypes(root, 'SHOW_MODAL'),
  clearFormErrors: generateActionTypes(root, 'CLEAR_FORM_ERRORS'),
}
