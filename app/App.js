/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Layout from './modules/layout/layout';
import { connect, Provider } from 'react-redux';
import store from './store/rootReducer';
import { utilities } from './common/services/utilities';
import { appInit } from './store/actionCreators/root';

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
            <AppComponent/>
        </Provider>
    ); 
}
