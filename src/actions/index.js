

const userRenamed = (id, name, surname) => {
    return {
        type: 'USER_RENAMED',
        id: id,
        name: name,
        surname: surname,
    };
};

const userRemoved = (userId) => {
    return {
        type: 'USER_REMOVED',
        payload: userId,
    };
};

const userCreated = (name, surname) => {
    return {
        type: 'USER_CREATED',
        name: name,
        surname: surname,
    }
}

const buttonCreated = (userId, label) => {
    return {
        type: 'BUTTON_CREATED',
        id: userId,
        label: label
    }
}

const calcButtonClick = (userId, symbol, act, dispatch) => {

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
            return dispatch({
                type: 'CALC_EQUAL',
                payload: userId,
            });

        case 'inversion':
            return dispatch({ type: 'CALC_INVERSION' });

        default:
            return dispatch({
                type: 'CALC_INPUT_OPERATOR',
                payload: symbol,
            });

    }
};

export {
    userRenamed,
    userRemoved,
    userCreated,
    calcButtonClick,
    buttonCreated
};