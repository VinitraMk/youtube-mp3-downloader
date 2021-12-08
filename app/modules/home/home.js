import React from "react";
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { DEFAULT_APP_THEME, THEMES } from "../../common/constants/constants";
import { utilities } from "../../common/services/utilities";
import Input from "../../components/input/input";
import SearchInput from '../../components/search-input/search-input';
import { searchForUrl, setDetails } from "../../store/actionCreators/modules/home";
import colors from "../../styles/common/colors";
import pageStyles from "./styles";
import { marginBottom } from '../../common/styles/utilities.js';
import { changeInputText } from "../../store/actionCreators/components/fields";
import Button from "../../components/button/button";
import { row, column } from '../../common/styles/layout';
import { displayFlex } from "../../common/styles/utilities.js";
import List from "../../components/list/list";
import { componentStyles } from '../../components/list/styles.js';
import { SafeAreaView } from "react-native-safe-area-context";
import { toggleLoader } from '../../store/actionCreators/modules/root.js';
import { apiService } from "../../common/services/apiService";

const DummyData = [
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'},
    { artistName: 'artist', albumName: 'album', songName: 'song'}
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playListItems: null,
            songList: null
        }
    }

    buildList = () => {
        const songList = utilities.createNewArray(this.state.songList);
        const playListItems = songList.map(x => {
            return Object.assign({}, {
                songName: x.snippet.title,
                id: x.id,
                artistName: this.props.artistName,
                albumName: this.props.albumName
            })
        });
        this.setState({
            playListItems: utilities.createNewArray(playListItems)
        });
    }

    onSearch = value => {
        //this.props.searchForUrl(value);
        apiService.fetchPlaylistItems(value).then(res => {
            this.setState({ songList: !utilities.isNullOrUndefined(res.items) ? res.items : [] });
            console.log(res);
            this.buildList();
        });
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

    render() {
        const themeName = this.props.theme;
        const searchLabelColor = themeName === THEMES.LIGHT ? colors.theme[themeName].lightSecondary : colors.theme[themeName].primary;
        const resultsLabelColor = themeName === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primaryDark;
        return (
            <>
                <View style={pageStyles(themeName).searchFormSection}>
                    <SearchInput label="Youtube Url" labelColor={searchLabelColor} onClick={this.onSearch} defaultValue={this.props.url} theme={themeName}></SearchInput>
                </View>
                <ScrollView style={pageStyles(themeName).searchResultsSection}>
                    <Input onChange={this.props.changeInputText} name="artistName" addOnStyles={{ wrapper: marginBottom(6)['mb6'] }} value={this.props.artistName} theme={themeName} label="Artist Name" labelColor={resultsLabelColor}></Input>
                    <Input onChange={this.props.changeInputText} name="albumName" addOnStyles={{ wrapper: marginBottom(6)['mb6'] }} value={this.props.albumName} theme={themeName} label="Album Name" labelColor={resultsLabelColor}></Input>
                    <View style={row().rowReverse}>
                        <View style={column(6).column}>
                            <Button theme={this.props.theme} text="Set Details" onClick={() => this.props.setDetails()}></Button>
                        </View>
                    </View>
                </ScrollView>
                <List backgroundColor={this.props.theme === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primaryDark} data={this.state.playListItems} renderListItem={this.renderListItem}></List>
            </>
        )
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);