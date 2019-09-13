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


const defaultData = {
    users: [
        { name: 'Nick', surname: 'Vonka', id: 1 },
        { name: 'Aria', surname: 'Stark', id: 2 },
        { name: 'Roz', surname: 'Zero', id: 3 },
    ],
    previousValue: '',
    currentValue: '0',
    operator: '',
}

const loadData = () => {
    let data = localStorage.getItem('data');
    if (!data) {
        data = defaultData;
        updateLocalStorage(data);
    } else {
        data = JSON.parse(data);
    }
    return data;
};

const updateLocalStorage = (state) => {
    localStorage.setItem('data',
        JSON.stringify(state));
};

const reducer = (state, action) => {

    if (state === undefined) {
        state = loadData();
    }

    // console.log('state', state);

    // console.log(action.type);

    switch (action.type) {

        case 'USER_RENAMED': {

            const user = state.users.find(({ id }) => id === action.id);
            const newUser = {
                ...user,
                name: action.name,
                surname: action.surname,
            }

            const newUsersArr = state.users.map((user) => {
                if (user.id === newUser.id) {
                    return newUser;
                } else {
                    return user;
                }
            })

            const newState = {
                ...state,
                users: newUsersArr,
            }

            updateLocalStorage(newState);

            return newState;
        }

        case 'USER_REMOVED': {
            const userId = action.payload;
            const newUsers = state.users.filter(({ id }) => id !== userId);
            const newState = {
                ...state,
                users: newUsers,
            };
            updateLocalStorage(newState);

            return newState;
        }

        case 'USER_CREATED': {
            const idx = state.users[state.users.length - 1].id + 1;
            const newUser = {
                id: idx,
                name: action.name,
                surname: action.surname,
            }
            const newState = {
                ...state,
                users: [...state.users, newUser]
            };

            updateLocalStorage(newState);

            return newState;
        }

        case 'BUTTON_CREATED': {
            const intId = parseInt(action.id);
            const user = state.users.find(({ id }) => id === intId);

            const buttonArray = user.buttons;
            let buttons = [];
            if (buttonArray) {
                buttons = buttonArray;
            }

            const newButton = {
                id: action.label,
                symbol: action.label,
                act: 'add'
            };

            buttons.push(newButton);

            const newUser = {
                ...user,
                buttons: buttons,
            }

            const newUsersArr = state.users.map((user) => {
                if (user.id === newUser.id) {
                    return newUser;
                } else {
                    return user;
                }
            })

            const newState = {
                ...state,
                users: newUsersArr,
            }

            updateLocalStorage(newState);

            return newState;
        }

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
            return result(state, action.payload);

        case 'CALC_INVERSION':
            return inversion(state);

        case 'CALC_INPUT_OPERATOR':
            return inputOperator(state, action.payload);

        default:
            return state;
    }
};

export default reducer;