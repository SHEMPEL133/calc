import React from 'react';
import { connect } from 'react-redux';

import UserListItem from '../UserListItem';
import ErrorIndicator from '../ErrorIndicator';
import { userRenamed, userRemoved } from '../../actions';

import './UserList.css';

const UserList = ({ users, error, onEdit, onDelete, onItemSelected }) => {

    if (error) {
        return <ErrorIndicator />;
    }

    console.log(users);

    const usersArray = users.map((user) => {
        return <UserListItem
            user={user}
            key={user.id}
            onEdit={onEdit}
            onDelete={onDelete}
            onItemSelected={onItemSelected} />
    });

    return (
        <ul >
            {usersArray}
        </ul>
    )
}

const mapStateToProps = ({ users }) => {
    return { users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(userRemoved(id)),
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps)(UserList);
