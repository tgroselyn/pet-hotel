import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addOwner(action) {
    try {
        yield axios.post('post.owner.php', action.payload);
        yield put({ type: 'FETCH_OWNERS' });
    } catch (err) {
        console.log('addOwner saga error:', err);
    }
} //end addOwner

function* fetchOwners(action) {
    try {
        let ownerList = yield axios.get('/get.owner.php');
        yield put({ type: 'SET_OWNERS', payload: ownerList.data });
    } catch (err) {
        console.log('fetchOwners saga error:', err);
    }
} //end fetchOwners

function* removeOwner(action) {
    try {
        yield axios.delete('/delete.owner.php', action.payload);
        yield put({ type: 'FETCH_OWNERS' });
    } catch (err) {
        console.log('removeOwner saga error:', err);
    }
} //end removeOwner

function* ownerSaga() {
    yield takeEvery('ADD_OWNER', addOwner);
    yield takeEvery('FETCH_OWNERS', fetchOwners);
    yield takeEvery('REMOVE_OWNER', removeOwner);
}

export default ownerSaga;
