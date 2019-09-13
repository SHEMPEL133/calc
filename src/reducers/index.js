import {
    back,
    deleteAll,
    deleteCurrent,
    result,
    inputDigit,
    inputDot,
    inputOperator,
    inversion
} from './calc-function';


const data = {
    users: [
        { name: 'Nick', surname: 'Vonka', id: 1 },
        { name: 'Aria', surname: 'Stark', id: 2 },
        { name: 'Roz', surname: 'Zero', id: 3 },
    ],
    previousValue: '',
    currentValue: '0',
    operator: '',
}

const reducer = (state = data, action) => {

    console.log(action.type);

    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                users: [],
                loading: true,
                error: null,
            };

        case 'FETCH_USERS_SUCCESS':
            return {
                users: action.payload,
                loading: false,
                error: null,
            };

        case 'FETCH_USERS_FAILURE':
            return {
                users: [],
                loading: false,
                error: action.payload
            };

        case 'USER_RENAMED':

            const user = state.users.filter(({ id }) => id === action.id);
            const newUser = {
                ...user[0],
                name: action.name,
                surname: action.surname,
            }

            const users = [...state.users];
            const newUsersArr = users.map((user) => {
                if (user.id === newUser.id) {
                    return newUser;
                } else {
                    return user;
                }
            })

            return {
                ...state,
                users: newUsersArr,
            };

        case 'USER_REMOVED':
            const userId = action.payload;
            const newUsers = state.users.filter(({ id }) => id !== userId);
            return {
                ...state,
                users: newUsers,
            };

        case 'CALC_ADD':
            return inputDigit(state, action.payload);
        case 'CALC_DOT':
            return inputDot(state, action.payload);
        case 'CALC_DELETE_ALL':
            return deleteAll(state);
        case 'CALC_DELETE_CURRENT':
            return deleteCurrent(state);
        case 'CALC_BACK':
            return back(state);
        case 'CALC_EQUAL':
            return result(state);
        case 'CALC_INVERSION':
            return inversion(state);
        case 'CALC_INPUT_OPERATOR':
            return inputOperator(state, action.payload);

        default:
            return state;
    }
};

export default reducer;