/*
 *
 * Aquarium actions
 *
 */
import constants from './constants'
import {
  generateEmptyAction,
  generateActionWithBody,
  generateActionWithBodyAndId,
  generateActionWithId,
} from '../../utils/generic-saga'

export default {
  fetchAquariums: generateEmptyAction(constants.fetchAquariums.request),
  addAquarium: generateActionWithBody(constants.addAquarium.request),
  updateAquarium: generateActionWithBodyAndId(constants.updateAquarium.request),
  deleteAquarium: generateActionWithId(constants.deleteAquarium.request),
  showModal: generateActionWithBody(constants.showModal.request),
  clearFormErrors: generateActionWithBody(constants.clearFormErrors.request),
}
