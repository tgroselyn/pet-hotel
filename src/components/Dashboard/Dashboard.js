import React, {Component} from 'react';
import AddPetForm from './AddPetForm';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <AddPetForm />
                <p>Hello from Dashboard</p>
            </div>
        )
    }
}

export default Dashboard;