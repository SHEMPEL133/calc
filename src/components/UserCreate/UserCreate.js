import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userCreated } from '../../actions';
import { history } from '../../utils';

import './UserCreate.css';

class UserCreate extends Component {

    state = {
        name: '',
        surname: '',
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

        const { name, surname } = this.state;

        return (
            <div>
                <h1 className='user-create-title'>New User</h1>
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
                    onClick={() => this.props.userCreated(name, surname)}>
                    Create
                </button>
            </div>
        )
    }

}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        userCreated: (name, surname) => {
            history.push('/users/');
            return dispatch(userCreated(name, surname));
        }
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps)(UserCreate);
