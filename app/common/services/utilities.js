const utilities = (function() {
    const isNullOrUndefined = value => value === undefined || value === null;

    const createNewArray = arr => arr.slice()

    const getPlaylistId = url => {
        const listIndex = url.indexOf('list=');
        return url.slice(listIndex + 5);
    }

    return {
        isNullOrUndefined: value => isNullOrUndefined(value),
        createNewArray: arr => createNewArray(arr),
        getPlaylistId: url => getPlaylistId(url)
    }
})();

export { utilities };