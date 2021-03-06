import { API_KEY, YOUTUBE_PLAYLIST_API, YOUTUBE_URL_PREFIX, YOUTUBE_VIDEO_API } from "../constants/constants";

const apiService = (function() {

    const buildUrl = (apiEndpoint, params) => {
        let url = apiEndpoint;
        Object.keys(params).forEach((k,i) => {
            if (i === 0) {
                if (typeof(params[k]) !== "string") {
                    params[k].forEach((x, j) => {
                        if (j === 0) {
                            url = `${url}?${k}=${x}`;
                        }
                        else {
                            url = `${url}&${k}=${x}`;
                        }
                    })
                } else {
                    url = `${url}?${k}=${params[k]}`;
                }
            }
            else {
                url = `${url}&${k}=${params[k]}`;
            }
        });
        return url;
    }

    const callApi = async(url) => {
        return fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    const fetchPlaylistItems = async(playlistId) => {
        const url = buildUrl(YOUTUBE_PLAYLIST_API, { part: ['snippet', 'id'], playlistId, maxResults: 50, key: API_KEY });
        return callApi(url)
        .then(res => res)
        .catch(err => console.log('Error calling playlist api', err));
    }

    const fetchVideoDetails = async(videoId) => {
        const url = buildUrl(YOUTUBE_VIDEO_API, { part: 'snippet', id: videoId, key: API_KEY });
        return callApi(url)
        .then(res => res)
        .catch(err => console.log('Error calling video api', err));
    }

    return {
        fetchPlaylistItems: playlistId => fetchPlaylistItems(playlistId).then(res => res),
        fetchVideoDetails: videoId => fetchVideoDetails(videoId).then(res => res)
    }
}());

export { apiService };
