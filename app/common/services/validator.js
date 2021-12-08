import { URL_TYPES } from "../constants/typeConstants";

const validator = (function() {
    const youtubeRe = /^(http|https)\:\/\/(youtube\.com|youtu\.be)/;
    const youtubePlaylistRe = /^(http|https)\:\/\/youtube\.com\/playlist\?list\=[A-Za-z0-9]+[$-_&]*/;
    const youtubeVideoRe =  /^(http|https)\:\/\/youtu\.be\/[A-Za-z0-9]+[$-_&]*/;

    const validateYoutubeUrl = url => youtubeRe.test(url);

    const isPlaylistOrVideo = url => {
        const isPlaylist = youtubePlaylistRe.test(url);
        const isVideo = youtubeVideoRe.test(url);
        if (isPlaylist) {
            return URL_TYPES.PLAYLIST
        } else if (isVideo) {
            return URL_TYPES.VIDEO
        } else {
            return URL_TYPES.INVALID
        }
    }
    return {
        validateYoutubeUrl: url => validateYoutubeUrl(url),
        isPlaylistOrVideo: url => isPlaylistOrVideo(url)
    }
}());

export { validator }