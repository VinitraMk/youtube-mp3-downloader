import { StyleSheet } from 'react-native';
import { THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors.js';

export const componentStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        button: {
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName]?.accent,
            color: 'white',
            paddingHorizontal: 13,
            paddingTop: 16,
            paddingBottom: 14,
            height: 24
        },
        iconButton: {
            backgroundColor: '#007773',
            color: 'white',
            paddingHorizontal: 13,
            paddingTop: 16,
            paddingBottom: 14,
            height: 56,
            width: 49
        }
    })
}
