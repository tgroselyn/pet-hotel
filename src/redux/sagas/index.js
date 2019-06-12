import { all } from 'redux-saga/effects';
import ownerSaga from './ownerSaga';
import petSaga from './petSaga';

export default function* rootSaga() {
    yield all([
        ownerSaga(),
        petSaga()
    ]);
}
