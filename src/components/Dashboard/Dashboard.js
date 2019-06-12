import React, {Component} from 'react';
import AddPetForm from './AddPetForm';

class Dashboard extends Component {
    render() {
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
                        {/* table rows */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard;