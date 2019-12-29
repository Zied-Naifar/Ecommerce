import { takeEvery, all } from 'redux-saga/effects';
import * as api from '../../services/profile.services';
import constants from './constants';
import { generateSaga, sagaTypes } from '../../utils/generic-saga';

export function* LoginsWatcher() {
  yield takeEvery(
    constants.login.request,
    generateSaga(sagaTypes.POST, constants.login, api.login),
  );
}

export function* logoutWatcher() {
  yield takeEvery(
    constants.logout.request,
    generateSaga(sagaTypes.GET, constants.logout, api.logout),
  );
}

export function* clearLoginFormErrorsWatcher() {
  yield takeEvery(
    constants.clearLoginFormErrors.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.clearLoginFormErrors),
  );
}

export function* clearRegisterFormErrorsWatcher() {
  yield takeEvery(
    constants.clearRegisterFormErrors.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.clearRegisterFormErrors),
  );
}

export function* registerWatcher() {
  yield takeEvery(
    constants.register.request,
    generateSaga(sagaTypes.POST, constants.register, api.register),
  );
}

export function* getProfileWatcher() {
  yield takeEvery(
    constants.getProfile.request,
    generateSaga(sagaTypes.GET, constants.getProfile, api.getProfile),
  );
}

export default function* profileSaga() {
  yield all([
    LoginsWatcher(),
    logoutWatcher(),
    clearLoginFormErrorsWatcher(),
    clearRegisterFormErrorsWatcher(),
    registerWatcher(),
    getProfileWatcher(),
  ]);
}
