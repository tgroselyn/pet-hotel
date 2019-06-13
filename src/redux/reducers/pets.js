let initialState = [
    {
        id: 1,
        petName: 'Taco',
        petColor: 'Brown',
        petBreed: 'Giraffe',
        ownerName: 'Thomas',
        checkedIn: null,
    },
    {
        id: 2,
        petName: 'Pepsi',
        petColor: 'Black',
        petBreed: 'Drink',
        ownerName: 'Viji',
        checkedIn: '06/12/2019',
    }
]

const petsReducer = (state = initialState, action) => {
    if (action.type === 'SET_PETS') {
        return action.payload;
    }
    return state;
};

export default petsReducer;
