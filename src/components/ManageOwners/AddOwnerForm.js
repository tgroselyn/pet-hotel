import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {

    state = {
        ownerName: '',
    }

    handleChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_OWNER', payload: this.state })
    }

    render() {

        console.log(this.state);

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="owner name"
                    value={this.state.ownerName}
                    onChange={this.handleChange('ownerName')}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect()(AddOwnerForm);