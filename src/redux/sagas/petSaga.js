import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addPet(action) {
    try {
        yield axios.post('post.pet.php', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {
        console.log('addPet saga error:', err);
    }
} //end addPet

function* fetchPets(action) {
    try {
        let petResponse = yield axios.get('get.pet.php');
        yield put({ type: 'SET_PETS', payload: petResponse.data });
    } catch (err) {
        console.log('fetchPets saga error:', err);
    }
} //end fetchPets

function* removePet(action) {
    try {
        yield axios.delete('delete.pet.php', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {
        console.log('removePet saga error:', err);
    }
} //end removePet

function* checkInPet(action) {
    try {
        yield axios.put('put.checkin.php', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {
        console.log('checkInPet saga error:', err);
    }
} //end checkInPet

function* checkOutPet(action) {
    try {
        yield axios.put('put.checkout.php', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {
        console.log('checkOutPet saga error:', err);
    }
} //end checkOutPet

function* petSaga() {
    yield takeEvery('ADD_PET', addPet);
    yield takeEvery('FETCH_PETS', fetchPets);
    yield takeEvery('REMOVE_PET', removePet);
    yield takeEvery('CHECK_IN_PET', checkInPet);
    yield takeEvery('CHECK_OUT_PET', checkOutPet);
}

export default petSaga;
