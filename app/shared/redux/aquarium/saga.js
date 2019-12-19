import { takeEvery, all } from 'redux-saga/effects'
import * as api from 'shared/services/aquarium.service'
import constants from './constants'
import { generateSaga, sagaTypes } from '../../utils/generic-saga'

export function* fetchAquariumsWatcher() {
  yield takeEvery(
    constants.fetchAquariums.request,
    generateSaga(sagaTypes.GET, constants.fetchAquariums, api.fetchAquariums),
  )
}

export function* addAquariumWatcher() {
  yield takeEvery(
    constants.addAquarium.request,
    generateSaga(sagaTypes.POST, constants.addAquarium, api.addAquarium),
  )
}
export function* updateAquariumWatcher() {
  yield takeEvery(
    constants.updateAquarium.request,
    generateSaga(
      sagaTypes.PUT,
      constants.updateAquarium,
      api.updateAquariumById,
    ),
  )
}

export function* deleteAquariumWatcher() {
  yield takeEvery(
    constants.deleteAquarium.request,
    generateSaga(
      sagaTypes.DELETE,
      constants.deleteAquarium,
      api.deleteAquariumById,
    ),
  )
}

export function* showModalWatcher() {
  yield takeEvery(
    constants.showModal.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.showModal),
  )
}

export function* clearFormErrorsWatcher() {
  yield takeEvery(
    constants.clearFormErrors.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.clearFormErrors),
  )
}

export default function* storeSaga() {
  yield all([
    fetchAquariumsWatcher(),
    addAquariumWatcher(),
    updateAquariumWatcher(),
    deleteAquariumWatcher(),
    showModalWatcher(),
    clearFormErrorsWatcher(),
  ])
}
