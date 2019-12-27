import { takeEvery, all } from 'redux-saga/effects';
import constants from './constants';
import { generateSaga, sagaTypes } from '../../utils/generic-saga';

export function* setIsSidebarOpenedWatcher() {
  yield takeEvery(
    constants.setIsSidebarOpened.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.setIsSidebarOpened),
  );
}

export default function* storeSaga() {
  yield all([setIsSidebarOpenedWatcher()]);
}
