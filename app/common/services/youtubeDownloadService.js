import { DOWNLOADS_LOCATION, YOUTUBE_URL_PREFIX } from '../constants/constants';
import ytdl from 'react-native-ytdl';
import { showToastMessage } from '../../components/toast/toast.js';

const youtubeDownloadService = (function() {

    const fs = require('react-native-fs');

    let songCount = 0;

    let c = 0;

    const fetchSongs = items => {
        songCount = items.length;
        c = 0;
        showToastMessage('Starting download');
        items.forEach(async(item, i) => {
            const url = `${YOUTUBE_URL_PREFIX}${item.id}`;
            //console.log('url', url)
            const info = await ytdl.getInfo(url, { quality: 'highestaudio' });
            const audioFormats = await ytdl.chooseFormat(info.formats, { container: 'mp4' });
            //console.log(fs.ExternalDirectoryPath, 'extrnal storage: ', fs.ExternalStorageDirectoryPath);
            const path = `${fs.ExternalStorageDirectoryPath}/Music/${item.songName}.mp3`;
            fs.downloadFile({
                fromUrl: audioFormats.url,
                toFile: path
            }).promise
            .then(res => {
                c = c + 1;
                if (c === songCount) {
                    //console.log('inside all files count if');
                    showToastMessage('All successfully files downloaded');
                }
                console.log('file downloaded', res);
            })
            .catch(err => {
                showToastMessage(`Error downloading song ${item.songName}: ${err}`);
                console.log('failed to download file', err);
            });
        })
    }

    return {
        fetchSongs : items => fetchSongs(items)
    }

}());

export { youtubeDownloadService };
