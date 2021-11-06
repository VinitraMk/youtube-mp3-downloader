import { Dimensions, StyleSheet } from 'react-native';
import { THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors';

export const componentStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        searchInputWrapper: {
            display: 'flex',
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center'
        },
        searchInputControl: {
            width: 265,
            height: 54,
            borderColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName].light,
            borderWidth: 1,
            borderRightWidth: 0,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 0,
            paddingLeft: 15,
            color: colors.theme[themeName].textColor
        },
        searchButton: {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4
        }
    })
}
