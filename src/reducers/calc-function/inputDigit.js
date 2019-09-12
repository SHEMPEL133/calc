
const inputDigit = (state, symbol) => {
    const { currentValue } = state;
    const copyCurrentValue = currentValue;
    if (copyCurrentValue === '0') {
        return {
            ...state,
            currentValue: symbol
        }
    } else {
        return {
            ...state,
            currentValue: copyCurrentValue + symbol
        }
    }
};

export default inputDigit;