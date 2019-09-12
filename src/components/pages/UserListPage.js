import React from 'react';
import UserList from '../UserList';

import { Route, withRouter } from 'react-router-dom';

const UserListPage = ({ history }) => {

    return (
        <UserList
            onItemSelected={(itemId) => {
                history.push(`/users/${itemId}`);
            }} />
    );
};

export default withRouter(UserListPage);