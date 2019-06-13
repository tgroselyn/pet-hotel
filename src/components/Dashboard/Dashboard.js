import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddPetForm from './AddPetForm';

class Dashboard extends Component {

    handleCheckin = petId => {
        this.props.dispatch({ type: 'CHECK_IN_PET', payload: petId });
    }

    handleCheckout = petId => {
        this.props.dispatch({type: 'CHECK_OUT_PET', payload: petId});
    }
    
    handleDelete = petId => {
        this.props.dispatch({type: 'REMOVE_PET', payload: petId});
    }

    render() {
        
        const rows = this.props.pets.map(pet => {
            return <tr key={pet.id}>
                <td>{pet.ownerName}</td>
                <td>{pet.petName}</td>
                <td>{pet.petBreed}</td>
                <td>{pet.petColor}</td>
                <td>{pet.checkedIn || 'no'}</td>
                <td>
                    <span onClick={() => this.handleDelete(pet.id)}>Delete</span>
                    {pet.checkedIn ?
                    <span onClick={() => this.handleCheckout(pet.id)}>Check out</span> :
                    <span onClick={() => this.handleCheckin(pet.id)}>Check in</span>
                    }
                </td>
            </tr>
        })

        return (
            <div>
                <h2>Add Pet</h2>
                <AddPetForm />
                <h2>History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked In</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapRedux = redux => {
    return {
        pets : redux.pets
    }
}

export default connect(mapRedux)(Dashboard);