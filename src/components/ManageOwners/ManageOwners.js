import React, { Component } from 'react';
import AddOwnerForm from './AddOwnerForm';

class ManageOwners extends Component {
    render() {
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
                        {/* table rows */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ManageOwners;