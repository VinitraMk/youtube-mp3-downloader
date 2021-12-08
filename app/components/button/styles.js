import { StyleSheet } from 'react-native';
import { THEMES } from '../../common/constants/constants';
import { utilities } from '../../common/services/utilities';
import colors from '../../styles/common/colors.js';

export const componentStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        button: {
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName]?.accent,
            paddingHorizontal: 13,
            paddingTop: 16,
            paddingBottom: 14,
            height: 54,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            borderRadius: 4
        },
        iconButton: {
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName]?.accent,
            color: 'white',
            paddingHorizontal: 13,
            paddingTop: 16,
            paddingBottom: 14,
            height: 56,
            width: 49
        },
        buttonText: {
            fontWeight: 'bold',
            color: colors.theme[themeName].light,
            textTransform: 'uppercase'
        }
    })
}
