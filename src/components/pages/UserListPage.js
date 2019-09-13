import React from 'react';
import UserList from '../UserList';

import { withRouter } from 'react-router-dom';
import './pages.css';

const UserListPage = ({ history }) => {

    return (
        <div>
            <UserList
                onItemSelected={(itemId) => {
                    history.push(`/users/${itemId}`);
                }}
                onEdit={(itemId) => {
                    history.push(`/users/${itemId}/edit`);
                }} />
            <button
                className='btn-link center'
                onClick={() => history.push(`/user-create`)}>
                Add User
            </button>
        </div>
    );
};

export default withRouter(UserListPage);