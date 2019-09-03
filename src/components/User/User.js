import React, { Component } from 'react';

import './User.css';

export default class User extends Component {
    render() {

        const { name, surName } = this.props;

        return (
            <div className="user-item">
                <div className="user-">
                    <span>{name} {surName}</span>
                </div>
                <div className="user-item_edit"
                    onClick={console.log('edit')}>
                    Edit</div>
                <div className="user-item_delete"
                    onClick={console.log('edit')}>
                    Delete</div>
            </div>
        )
    }
}