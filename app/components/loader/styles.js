import { Dimensions, StyleSheet } from 'react-native';
import { DEFAULT_APP_THEME, THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors';

export const componentStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        loader: {
            position: 'fix',
            top: 0,
            left: 0,
            backgroundColor: themeName === THEMES.LIGHT ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
        }
    });
};
