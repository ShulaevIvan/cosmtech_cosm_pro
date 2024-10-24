const sortArrWithParam = (arr, param='', sortType='num') => {
    if (!Array.isArray(arr)) return;
    if (sortType === 'bool' && param) {
        return Array.from(arr).sort((a, b) => (a[param] === b[param])? 0 : a ? -1 : 1)
    }
};


export default sortArrWithParam;