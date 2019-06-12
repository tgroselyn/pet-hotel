import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* addOwner(action) {
    try {
        // yield axios.post('/api/friend', action.payload);
        // yield put({ type: 'GET_FRIENDS' });
    } catch (err) {
        console.log('addFriend saga error:', err);
    }
} //end addFriend

function* ownerSaga() {
    yield takeEvery('ADD_OWNER', addOwner);
}

export default ownerSaga;
