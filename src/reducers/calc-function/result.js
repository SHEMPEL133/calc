import saveHistory from '../saveHistory';


const result = (state, userId) => {
    let { currentValue, previousValue, operator } = state;

    if (previousValue.length === 0) {
        return state;
    }

    let trueOperator = '';
    switch (operator) {
        case '÷': trueOperator = '/';
            break;
        case '×': trueOperator = '*';
            break;
        default: trueOperator = operator;
    }

    if (currentValue[0] === '-') {
        currentValue = '(' + currentValue + ')';
    }

    const expression = previousValue + trueOperator + currentValue;
    const result = eval(expression);

    const updatedState = saveHistory(state, userId, expression + '=' + result);

    const newState = {
        ...updatedState,
        currentValue: eval(result),
        previousValue: '',
        operator: ''
    }

    localStorage.setItem('data',
        JSON.stringify(newState));

    return newState;
};

export default result;