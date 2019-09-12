
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
    usersService.getUsers();
    // .then((data) => dispatch(usersLoaded(data)))
    // .catch((err) => dispatch(usersError(err)));
}

const calcButtonClick = (symbol, act, dispatch) => {

    switch (act) {
        case 'add':
            return dispatch({
                type: 'CALC_ADD',
                payload: symbol,
            });

        case 'dot':
            return dispatch({
                type: 'CALC_DOT',
                payload: symbol,
            });

        case 'deleteAll':
            return dispatch({ type: 'CALC_DELETE_ALL' });

        case 'deleteCurrent':
            return dispatch({ type: 'CALC_DELETE_CURRENT' });

        case 'back':
            return dispatch({ type: 'CALC_BACK' });

        case 'equal':
            return dispatch({ type: 'CALC_EQUAL' });

        case 'inversion':
            return dispatch({ type: 'CALC_INVERSION' });

        default:
            return dispatch({
                type: 'CALC_INPUT_OPERATOR',
                payload: symbol,
            });

    }
};











const isExistDot = (str) => {
    return str.indexOf('.') > 0 ? true : false
}


const saveHistory = (str) => {
    let historyArray = sessionStorage.getItem('history');
    let history = [];
    if (historyArray) {
        history = JSON.parse(historyArray);
    }
    history.push(str);
    sessionStorage.setItem('history', JSON.stringify(history));
    this.props.historyUpdate();
}




const getButtons = () => {
    let btns = sessionStorage.getItem('buttons');
    if (btns) {
        return JSON.parse(btns);
    }
}

export {
    fetchUsers,
    userRenamed,
    userRemoved,
    calcButtonClick,
};