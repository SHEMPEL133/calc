import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';
import { withUsersService } from '../hoc';
import UserListItem from '../UserListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import { fetchUsers, userRenamed, userRemoved } from '../../actions';

import './UserList.css';

const UserList = ({ users, onEdit, onDelete }) => {
    const usersArray = users.map((user) => {
        return <UserListItem
            user={user}
            key={user.id}
            onEdit={onEdit}
            onDelete={onDelete} />
    });

    return (
        <ul className=''>
            {usersArray}
        </ul>
    )
};

class UserListContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        const { users, loading, error, onEdit, onDelete } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <UserList
            users={users}
            onEdit={onEdit}
            onDelete={onDelete} />
    }
}

const mapStateToProps = ({ users, loading, error }) => {
    return { users, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { usersService } = ownProps;
    return {
        fetchUsers: fetchUsers(usersService, dispatch),
        onEdit: (id) => dispatch(userRenamed(id)),
        onDelete: (id) => dispatch(userRemoved(id)),
    }
};

export default compose(
    withUsersService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UserListContainer);
