let initialState = [
    {
        id: 1,
        name: 'Taco',
        color: 'Brown',
        breed: 'Giraffe',
        // ownerName: 'Thomas',
        is_checked_in: null,
    }
]

const petsReducer = (state = [], action) => {
    if (action.type === 'SET_PETS') {
        return action.payload.pets;
    }
    return state;
};

export default petsReducer;
