const utilities = (function() {
    const isNullOrUndefined = value => value === undefined || value === null;

    return {
        isNullOrUndefined: value => isNullOrUndefined(value)
    }
})();

export { utilities };