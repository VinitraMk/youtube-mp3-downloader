import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import Icon from '../../components/icons/icon.js';
import { APP_NAME } from '../../common/constants/constants';
import colors from '../../styles/common/colors';
import layoutStyles from './styles';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const themeName = this.props.theme;
        return(
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.theme[themeName].primaryDark}
                    hidden={true}
                    barStyle="light-content"
                ></StatusBar>
                <View style={layoutStyles(themeName).header}>
                    <Text style={layoutStyles(themeName).headerTitle}>{APP_NAME}</Text>
                    <Icon iconName="MoreVertical"></Icon>
                </View>
                <View style={layoutStyles(themeName).body}></View>
            </SafeAreaView>
        )
    }
}