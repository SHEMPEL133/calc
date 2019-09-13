import React from 'react';
import UserList from '../UserList';

import { withRouter } from 'react-router-dom';

const UserListPage = ({ history }) => {

    return (
        <UserList
            onItemSelected={(itemId) => {
                history.push(`/users/${itemId}`);
            }}
            onEdit={(itemId) => {
                history.push(`/users/${itemId}/edit`);
            }} />
    );
};

export default withRouter(UserListPage);