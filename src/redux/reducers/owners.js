let initialState = [
    {
        id: 1,
        name: 'Thomas',
        numberOfPets: 3
    },
    {
        id: 2,
        name: 'Viji',
        numberOfPets: 999
    }
]

const ownersReducer = (state = initialState, action) => {
    if (action.type === 'SET_OWNERS') {
        return action.payload;
    }
    return state;
};

export default ownersReducer;
