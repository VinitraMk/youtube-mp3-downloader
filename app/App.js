/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Layout from './modules/layout/layout';
import { connect, Provider } from 'react-redux';
import store from './store/rootReducer';
import { utilities } from './common/services/utilities';
import { NavigationContainer } from '@react-navigation/native';

const App = props => {
    return (
        <Layout theme={props.theme}></Layout>
    );
};

const mapStateToProps = state => {
    return {
        root: state.root,
        theme: utilities.isNullOrUndefined(state.root) ? '' : state.root.theme
    }
};

export const AppComponent = connect(mapStateToProps)(App);

export const appComponentInit = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppComponent/>
            </NavigationContainer>
        </Provider>
    ); 
}
