import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import Icon from '../../components/icons/icon.js';
import { APP_NAME } from '../../constants/constants';
import colors from '../../styles/common/colors';
import layoutStyles from './styles';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView backgroundColor={colors.theme['light'].light}>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.theme['light'].primaryDark}
                ></StatusBar>
                <View style={layoutStyles().header}>
                    <Text style={layoutStyles().headerTitle}>{APP_NAME}</Text>
                    <Icon iconName="MoreVertical"></Icon>
                </View>
            </SafeAreaView>
        )
    }
}