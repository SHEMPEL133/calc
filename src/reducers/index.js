
const initialState = {
    users: [
        { name: 'Nick', surname: 'Vonka', id: 1 },
        { name: 'Aria', surname: 'Stark', id: 2 },
        { name: 'Roz', surname: 'Zero', id: 3 }
    ],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {

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

        // CASE 'USER_RENAMED':

        case 'USER_REMOVED':
            const userId = action.payload;
            const newUsers = state.users.filter(({ id }) => id !== userId);
            return {
                ... state,
                users: newUsers,
            };

        default:
            return state;
    }
};

export default reducer;