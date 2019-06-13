import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddOwnerForm from './AddOwnerForm';

class ManageOwners extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_OWNERS' });
    }

    handleDelete = ownerId => {
        this.props.dispatch({ type: 'REMOVE_OWNER', payload: ownerId });
    }

    render() {

        const tableRows = this.props.owners.map(owner => {
            return <tr key={owner.id}>
                <td>{owner.name}</td>
                <td>{owner.numberOfPets}</td>
                <td><span onClick={() => this.handleDelete(owner.id)}>Delete</span></td>
            </tr>
        })

        return (
            <div>
                <h2>Add Owner</h2>
                <AddOwnerForm />
                <h2>Owners</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Pets</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapRedux = redux => {
    return {
        owners: redux.owners
    }
}

export default connect(mapRedux)(ManageOwners);