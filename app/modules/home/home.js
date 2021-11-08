import React from "react";
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { THEMES } from "../../common/constants/constants";
import { utilities } from "../../common/services/utilities";
import Input from "../../components/input/input";
import SearchInput from '../../components/search-input/search-input';
import { searchForUrl } from "../../store/actionCreators/modules/home";
import colors from "../../styles/common/colors";
import pageStyles from "./styles";
import { marginBottom } from '../../common/styles/utilities.js';
import { changeInputText } from "../../store/actionCreators/components/fields";
import Button from "../../components/button/button";
import { row, column } from '../../common/styles/layout';
import List from "../../components/list/list";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearch = value => {
        this.props.searchForUrl(value);
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
                            <Button theme={this.props.theme} text="Set Details"></Button>
                        </View>
                    </View>
                    <List></List>
                </ScrollView>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.root.theme,
        url: state.home.url,
        artistName: state.home.artistName,
        albumName: state.home.albumName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchForUrl: url => {
            dispatch(searchForUrl(url))
        },
        changeInputText: (fieldName, fieldValue) => {
            dispatch(changeInputText(fieldName, fieldValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);