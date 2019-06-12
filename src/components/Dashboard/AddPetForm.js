import React, { Component } from 'react';

class AddPetForm extends Component {

    state = {
        petName: '',
        petColor: '',
        petBreed: '',
        ownerName: '',
    }

    handleChange = propertyName => event => {
        this.setState({
            [propertyName] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('submitted!!!');
    }

    render() {

        console.log(this.state);

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="pet name"
                    value={this.state.petName}
                    onChange={this.handleChange('petName')}
                />
                <input
                    type="text"
                    placeholder="pet color"
                    value={this.state.petColor}
                    onChange={this.handleChange('petColor')}
                />
                <input
                    type="text"
                    placeholder="pet breed"
                    value={this.state.petBreed}
                    onChange={this.handleChange('petBreed')}
                />
                <select
                    value={this.state.ownerName}
                    onChange={this.handleChange('ownerName')} >
                    <option>Thomas</option>
                    <option>Viji</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddPetForm;