const ownersReducer = (state = [], action) => {
    if (action.type === 'SET_OWNERS') {
        return action.payload;
    }
    return state;
};

export default ownersReducer;
