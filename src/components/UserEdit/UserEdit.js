import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userRenamed } from '../../actions';
import { history } from '../../utils';

import './UserEdit.css';

class UserEdit extends Component {

    state = {
        id: this.props.id,
        name: this.props.name,
        surname: this.props.surname,
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    onSurnameChange = (event) => {
        this.setState({
            surname: event.target.value
        })
    };

    render() {

        const { id, name, surname } = this.state;

        return (
            <div>
                <h1 className='user-create-title'>Editing</h1>
                <div className='flex-box-column'>
                    <div className='flex-box'>
                        <span>Name:</span>
                        <input className='form add-input '
                            type="text" value={name}
                            onChange={this.onNameChange} />
                    </div>
                    <div className='flex-box'>
                        <span>Surname:</span>
                        <input className='form add-input '
                            type="text" value={surname}
                            onChange={this.onSurnameChange} />
                    </div>
                </div>
                <button className='btn-link center'
                    onClick={() => this.props.userRenamed(id, name, surname)}>
                    Save
                </button>
            </div>
        )
    }

}

const mapStateToProps = ({ users }, { id }) => {
    const intId = parseInt(id);
    const user = users.find((user) => (user.id === intId) ? true : false);
    const { name, surname } = user;
    return { name, surname }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userRenamed: (id, name, surname) => {
            history.push('../');
            return dispatch(userRenamed(parseInt(id), name, surname));
        }
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps)(UserEdit);
