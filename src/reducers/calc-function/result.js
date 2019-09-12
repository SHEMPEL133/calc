
const result = (state) => {
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
    // this.saveHistory(expression + '=' + result);

    return {
        ...state,
        currentValue: eval(result),
        previousValue: '',
        operator: ''
    }
};

export default result;