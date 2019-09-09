import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './User.css';

export default class User extends Component {
    render() {

        const { name, surName, id } = this.props;

        return (
            <li className="user-item">
                <div className="user-item_name">
                    <span>{name} {surName}</span>
                </div>
                <Link to={`/users/${id}`} className="user-item_btn user-item_edit">Edit</Link>
                <button className="user-item_btn user-item_delete"
                    onClick={() => console.log('delete')}>
                    Delete
                </button>
            </li>
        )
    }
}