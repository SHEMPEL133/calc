
const back = (state) => {
    const copyCurrentValue = state.currentValue;
    if (copyCurrentValue.length === 1) {
        return {
            ...state,
            currentValue: '0'
        }
    }
    if (copyCurrentValue.length === 2 && copyCurrentValue[0] === '-') {
        return {
            ... state,
            currentValue: '0'
        }
    }
    if (copyCurrentValue.length > 1) {
        return {
            ... state,
            currentValue: copyCurrentValue.slice(0, copyCurrentValue.length - 1)
        }
    }
};

export default back;
