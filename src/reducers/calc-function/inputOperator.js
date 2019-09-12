
const inputOperator = (state, symbol) => {
    const { currentValue, previousValue } = state;
    if (currentValue === '0' && previousValue.length !== 0) {
        return {
            ...state,
            operator: symbol
        }
    }
    if (previousValue.length === 0 && currentValue !== '0') {
        return {
            ...state,
            previousValue: currentValue,
            currentValue: '0',
            operator: symbol
        }
    }
};

export default inputOperator;