import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* addPet(action) {
    try {
        // yield axios.post('/api/friend', action.payload);
        // yield put({ type: 'GET_FRIENDS' });
    } catch (err) {
        console.log('addFriend saga error:', err);
    }
} //end addFriend

function* petSaga() {
    yield takeEvery('ADD_PET', addPet);
}

export default petSaga;
