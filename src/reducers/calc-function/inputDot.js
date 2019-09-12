
const inputDot = (state, symbol) => {
    const { currentValue } = state;
    const copyCurrentValue = currentValue;
    if (!isExistDot(currentValue)) {
        return {
            ...state,
            currentValue: copyCurrentValue + symbol
        }
    }
};

const isExistDot = (str) => {
    return str.indexOf('.') > 0 ? true : false
};

export default inputDot;