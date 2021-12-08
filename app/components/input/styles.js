import { Dimensions, StyleSheet } from 'react-native';
import { THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors';

export const componentStyles = (themeName = DEFAULT_APP_THEME, labelColor = 'transparent') => {
    return StyleSheet.create({
        searchInputWrapper: {
            display: 'flex',
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 5
        },
        searchInputControl: {
            width: '100%',
            height: 54,
            borderColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName].light,
            borderWidth: 1,
            borderRadius: 4,
            paddingLeft: 15,
            color: colors.theme[themeName].textColor
        },
        searchLabel: {
            color: colors.theme[themeName].textColor,
            position: 'absolute',
            top: -9,
            left: 15,
            backgroundColor: labelColor,
            zIndex: 2
        }
    })
}
