
const deleteAll = (state) => ({
    ...state,
    previousValue: '',
    currentValue: '0',
    operator: '',
});

export default deleteAll;