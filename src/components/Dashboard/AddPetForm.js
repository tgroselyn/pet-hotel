import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddPetForm extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        ownerName: '',
    }

    handleChange = propertyName => event => {
        this.setState({
            [propertyName] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_PET', payload: this.state})
    }

    render() {

        console.log(this.state);

        const ownerNames = this.props.owners.map(owner => {
            return <option key={owner.id} value={owner.name}>{owner.name}</option>
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="pet name"
                    value={this.state.petName}
                    onChange={this.handleChange('name')}
                />
                <input
                    type="text"
                    placeholder="pet color"
                    value={this.state.petColor}
                    onChange={this.handleChange('color')}
                />
                <input
                    type="text"
                    placeholder="pet breed"
                    value={this.state.petBreed}
                    onChange={this.handleChange('breed')}
                />
                <select
                    value={this.state.ownerName}
                    onChange={this.handleChange('ownerName')} >
                    {ownerNames}
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapRedux = redux => {
    return {    
        owners: redux.owners
    }
}

export default connect(mapRedux)(AddPetForm);