
const usersLoaded = (newUsers) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: newUsers,
    };
};

const usersRequested = () => {
    return {
        type: 'FETCH_USERS_REQUESTED',
    };
};

const usersError = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error,
    };
};

const userRenamed = (userId) => {
    return {
        type: 'USER_RENAMED',
        payload: userId,
    };
};

const userRemoved = (userId) => {
    return {
        type: 'USER_REMOVED',
        payload: userId,
    };
};

const fetchUsers = (usersService, dispatch) => () => {
    dispatch(usersRequested());
    usersService.getUsers()
        .then((data) => dispatch(usersLoaded(data)))
        .catch((err) => dispatch(usersError(err)));
}

export {
    fetchUsers,
    userRenamed,
    userRemoved,
};