
const inversion = (state) => {
    let { currentValue } = state;
    let numberCurrentValue = parseFloat(currentValue);
    numberCurrentValue *= -1;
    return {
        ... state,
        currentValue: numberCurrentValue.toString()
    }
};

export default inversion;