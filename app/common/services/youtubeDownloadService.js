import { DOWNLOADS_LOCATION, YOUTUBE_URL_PREFIX } from '../constants/constants';
import ytdl from 'react-native-ytdl';
import { RNFFmpegConfig } from 'react-native-ffmpeg';

const youtubeDownloadService = (function() {

    //const ytdl = require('react-native-ytdl');
    //const ffmpeg = require('react-native-ffmpeg');
    const fs = require('react-native-fs');

    const fetchSongs = items => {
        items.forEach(async(item, i) => {
            const url = `${YOUTUBE_URL_PREFIX}${item.id}`;
            //console.log('url', url)
            const info = await ytdl.getInfo(url, { quality: 'highestaudio' });
            const audioFormats = await ytdl.chooseFormat(info.formats, { codecs: 'mp4a.40.2' });
            //console.log('format', audioFormats);
            //console.log(fs.ExternalDirectoryPath, fs.ExternalStorageDirectoryPath, fs.DocumentDirectoryPath, fs.MainBundlePath);
            const path = `${fs.ExternalStorageDirectoryPath}/Music/${item.songName}.mp3`;
            fs.downloadFile({
                fromUrl: audioFormats.url,
                toFile: path
            }).promise
            .then(res => console.log('file downloaded', res))
            .catch(err => console.log('failed to download file', err));
        })
    }

    return {
        fetchSongs : items => fetchSongs(items)
    }

}());

export { youtubeDownloadService };
