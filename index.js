/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { appComponentInit } from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => appComponentInit);
