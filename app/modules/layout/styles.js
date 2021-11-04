import { StyleSheet, Dimensions } from 'react-native';
import { DEFAULT_APP_THEME, THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors';

const layoutStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        header: {
            height: 56,
            width: '100%',
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].primary : colors.theme[themeName].primaryDark,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 15,
            paddingLeft: 20 
        },
        headerTitle: {
            color: colors.theme[themeName].light,
            fontSize: 20
        },
        body: {
            display: 'flex',
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primary,
            height: Dimensions.get('window').height - 56
        }
    })
};

export default layoutStyles;