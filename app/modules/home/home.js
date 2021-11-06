import React from "react";
import { ScrollView, Text, View } from 'react-native';
import { connect } from "react-redux";
import { utilities } from "../../common/services/utilities";
import SearchInput from "../../components/search-input/search-input";
import { searchForUrl } from "../../store/actions/home";
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
        return (
            <>
                <View style={pageStyles(themeName).searchFormSection}>
                    <SearchInput onClick={this.onSearch} defaultValue={this.props.url} theme={themeName}></SearchInput>
                </View>
                <ScrollView style={pageStyles(themeName).searchResultsSection}>
                    <Text>{this.props.url}</Text>
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