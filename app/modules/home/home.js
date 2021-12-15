import React from "react";
import { ScrollView, Text, View, StyleSheet, PermissionsAndroid } from 'react-native';
import { connect } from "react-redux";
import { DEFAULT_APP_THEME, THEMES } from "../../common/constants/constants";
import { utilities } from "../../common/services/utilities";
import Input from "../../components/input/input";
import SearchInput from '../../components/search-input/search-input';
import { searchForUrl, setDetails } from "../../store/actionCreators/modules/home";
import colors from "../../styles/common/colors";
import pageStyles from "./styles";
import { marginBottom, textR } from '../../common/styles/utilities.js';
import { changeInputText } from "../../store/actionCreators/components/fields";
import Button from "../../components/button/button";
import { row, column } from '../../common/styles/layout';
import { displayFlex, marginTop } from "../../common/styles/utilities.js";
import List from "../../components/list/list";
import { componentStyles } from '../../components/list/styles.js';
import { SafeAreaView } from "react-native-safe-area-context";
import { toggleLoader, setAppReady } from '../../store/actionCreators/modules/root.js';
import { apiService } from "../../common/services/apiService";
import { validator } from '../../common/services/validator.js';
import { ButtonTypes, URL_TYPES } from "../../common/constants/typeConstants";
import { errorText } from '../../common/styles/utilities.js';
import { youtubeDownloadService } from "../../common/services/youtubeDownloadService";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playListItems: [],
            searchInputError: null
        }
    }

    buildList = (items, type = URL_TYPES.PLAYLIST) => {
        const songList = utilities.createNewArray(items);
        const playListItems = songList.map(x => {
            return Object.assign({}, {
                songName: x.snippet.title,
                id: type === URL_TYPES.PLAYLIST ? x.snippet.resourceId.videoId : x.id,
                artistName: this.props.artistName,
                albumName: this.props.albumName
            })
        });
        this.setState({
            playListItems
        });
    }

    downloadSongs = () => {
        if (!utilities.isArrayEmpty(this.state.playListItems)) {
            youtubeDownloadService.fetchSongs(this.state.playListItems);
        }
    }

    onSearch = value => {
        const isUrlValid = validator.validateYoutubeUrl(value);
        if (isUrlValid) {
            this.props.searchForUrl(value);
            const urlType = validator.isPlaylistOrVideo(value);
            if (urlType === URL_TYPES.PLAYLIST) {
                this.setState({
                    searchInputError: null
                });
                const playlistId = utilities.getPlaylistId(value);
                apiService.fetchPlaylistItems(playlistId).then(res => {
                    const songList = !utilities.isNullOrUndefined(res.items) ? res.items : []
                    this.buildList(songList);
                });
            }
            else {
                const videoId = utilities.getVideoId(value);
                apiService.fetchVideoDetails(videoId).then(res => {
                    const songList = !utilities.isNullOrUndefined(res.items) ? res.items : [];
                    this.buildList(songList, urlType);
                });
            }
        } else {
            this.setState({
                searchInputError: 'Invalid url'
            });
        }
    }

    renderListItem = item => (
        <>
            <Text style={componentStyles(this.props.theme).mainText}>{item.songName}</Text>
            {<View style={componentStyles(this.props.theme).listItemFooter}>
                <Text style={componentStyles(this.props.theme).subText}>{item.artistName}</Text>
                <Text style={componentStyles(this.props.theme).subText}>{item.albumName}</Text>
            </View>}
        </>
    )

    updatePlaylist = () => {
        let playListItems = this.state.playListItems;
        playListItems = playListItems.map(x => {
            return Object.assign({}, x, {
                artistName: this.props.artistName,
                albumName: this.props.albumName
            })
        });
        this.setState({
            playListItems
        });
    }

    requestPermissions = () => {
        if (!this.props.isAppReady) {
            try {
                PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
                )
                .then(async(res) => {
                    const readGranted = res[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE];
                    const writeGranted = res[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];
                    if (readGranted && writeGranted) {
                        this.props.setAppReady();
                        console.log('Permissions granted');
                    }
                })
            }
            catch {
                console.log('error')
            }
        }
    }

    render() {
        const themeName = this.props.theme;
        const searchLabelColor = themeName === THEMES.LIGHT ? colors.theme[themeName].lightSecondary : colors.theme[themeName].primary;
        const resultsLabelColor = themeName === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primaryDark;
        return (
            <>
                <View style={pageStyles(themeName).searchFormSection}>
                    <SearchInput label="Youtube Url" labelColor={searchLabelColor} onClick={this.onSearch} defaultValue={this.props.url} theme={themeName}></SearchInput>
                    {this.state.searchInputError !== "" && <Text style={errorText()}>{this.state.searchInputError}</Text>}
                </View>
                {this.props.isAppReady && <ScrollView style={pageStyles(themeName).searchResultsSection}>
                    <Input onChange={this.props.changeInputText} name="artistName" addOnStyles={{ wrapper: marginBottom(6)['mb6'] }} value={this.props.artistName} theme={themeName} label="Artist Name" labelColor={resultsLabelColor}></Input>
                    <Input onChange={this.props.changeInputText} name="albumName" addOnStyles={{ wrapper: marginBottom(6)['mb6'] }} value={this.props.albumName} theme={themeName} label="Album Name" labelColor={resultsLabelColor}></Input>
                    <View style={row().rowReverse}>
                        <View style={column(6).column}>
                            <Button theme={this.props.theme} text="Set Details" onClick={() => this.props.setDetails()}></Button>
                        </View>
                    </View>
                    <View style={`${marginTop(1)['mt1']} ${textR().textR}`}>
                        <Button disabled={utilities.isArrayEmpty(this.state.playListItems)} theme={this.props.theme} text="Download All" onClick={() => this.downloadSongs()} type={ButtonTypes.TRANSPARENT}></Button>
                    </View>
                </ScrollView>}
                <List backgroundColor={this.props.theme === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primaryDark} data={this.state.playListItems} renderListItem={this.renderListItem}></List>
            </>
        )
    }

    componentDidMount() {
        this.requestPermissions();
    }

    componentDidUpdate(prevProps) {
        if (this.props.detailsChangedToggler !== prevProps.detailsChangedToggler) {
            this.updatePlaylist()
        }
    }
}

const mapStateToProps = state => {
    return {
        theme: state.root.theme,
        isAppReady: state.root.isAppReady,
        url: state.home.url,
        artistName: state.home.artistName,
        albumName: state.home.albumName,
        detailsChangedToggler: state.home.detailsChangedToggler
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchForUrl: url => {
            dispatch(searchForUrl(url))
        },
        changeInputText: (fieldName, fieldValue) => {
            dispatch(changeInputText(fieldName, fieldValue));
        },
        setDetails: () => {
            dispatch(setDetails())
        },
        toggleLoader: (showLoader, message) => {
            dispatch(toggleLoader(showLoader, message));
        },
        setAppReady: () => {
            dispatch(setAppReady());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);