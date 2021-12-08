const utilities = (function() {
    const isNullOrUndefined = value => value === undefined || value === null;

    const createNewArray = arr => arr.slice()

    return {
        isNullOrUndefined: value => isNullOrUndefined(value),
        createNewArray: arr => createNewArray(arr)
    }
})();

export { utilities };