import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import Icon from '../../components/icons/icon.js';
import { APP_NAME } from '../../common/constants/constants';
import colors from '../../styles/common/colors';
import layoutStyles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../../components/stackNavigation/stackNavigation.js';
import Home from '../home/home.js';
import Settings from '../settings/settings.js';

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
                <View style={layoutStyles(themeName).body}>
                    <StackNavigator.Navigator initialRouteName="Home"
                        screenOptions={{
                            headerStyle: {
                                color: colors.theme[themeName].light,
                                backgroundColor: colors.theme[themeName].primary
                            },
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: colors.theme[themeName].light
                            },
                            headerTitle: APP_NAME,
                            headerRight: () => <Icon iconName="MoreVertical"></Icon>
                        }
                        }
                    >
                        <StackNavigator.Screen name="Home" component={Home}></StackNavigator.Screen>
                        <StackNavigator.Screen name="Settings" component={Settings}></StackNavigator.Screen>
                    </StackNavigator.Navigator>
                </View>
            </SafeAreaView>
        )
    }
}