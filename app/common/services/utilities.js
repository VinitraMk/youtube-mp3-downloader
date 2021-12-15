const utilities = (function() {
    const isNullOrUndefined = value => value === undefined || value === null;

    const createNewArray = arr => arr.slice()

    const getPlaylistId = url => {
        const listIndex = url.indexOf('list=');
        return url.slice(listIndex + 5);
    }

    const getVideoId = url => {
        const apiIndex = url.indexOf('.be/');
        return url.slice(apiIndex + 4);
    }

    return {
        isNullOrUndefined: value => isNullOrUndefined(value),
        createNewArray: arr => createNewArray(arr),
        getPlaylistId: url => getPlaylistId(url),
        getVideoId: url => getVideoId(url),
        isArrayEmpty: arr => !isNullOrUndefined(arr) && arr.length === 0
    }
})();

export { utilities };