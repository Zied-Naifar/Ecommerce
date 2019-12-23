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

export default function* storeSaga() {
  yield all([LoginsWatcher(), logoutWatcher()]);
}
