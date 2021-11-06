import React from "react";
import { ScrollView, Text, View } from 'react-native';
import { connect } from "react-redux";
import { THEMES } from "../../common/constants/constants";
import { utilities } from "../../common/services/utilities";
import Input from "../../components/input/input";
import SearchInput from '../../components/search-input/search-input';
import { searchForUrl } from "../../store/actions/home";
import colors from "../../styles/common/colors";
import pageStyles from "./styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearch = value => {
        console.log(value);
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
                    <Input value="" theme={themeName} label="Artist Name" labelColor={resultsLabelColor}></Input>
                </ScrollView>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.root.theme,
        url: state.home.url
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchForUrl: url => {
            dispatch(searchForUrl(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);