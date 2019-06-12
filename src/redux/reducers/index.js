import { combineReducers } from 'redux';
import owners from './owners';
import pets from './pets';

const rootReducer = combineReducers({
    owners,
    pets
});

export default rootReducer;