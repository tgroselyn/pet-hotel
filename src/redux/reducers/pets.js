let initialState = [
    {
        id: 1,
        name: 'Taco',
        color: 'Brown',
        breed: 'Giraffe',
        // ownerName: 'Thomas',
        is_checked_in: null,
    },
    // {
    //     id: 2,
    //     petName: 'Pepsi',
    //     petColor: 'Black',
    //     petBreed: 'Drink',
    //     ownerName: 'Viji',
    //     checkedIn: '06/12/2019',
    // }
]

const petsReducer = (state = initialState, action) => {
    if (action.type === 'SET_PETS') {
        return action.payload.pets;
    }
    return state;
};

export default petsReducer;
