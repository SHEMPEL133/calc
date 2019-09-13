
const saveHistory = (state, userId, str) => {

    const intId = parseInt(userId);
    const user = state.users.find((user) => (user.id === intId) ? true : false);

    const historyArray = user.history;
    let history = [];
    if (historyArray) {
        history = historyArray;
    }
    history.push(str);

    const newUser = {
        ...user,
        history: history,
    }

    const newUsersArr = state.users.map((user) => {
        if (user.id === newUser.id) {
            return newUser;
        } else {
            return user;
        }
    })

    return {
        ...state,
        users: newUsersArr,
    }
};

export default saveHistory