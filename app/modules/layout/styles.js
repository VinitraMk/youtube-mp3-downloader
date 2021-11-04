import { StyleSheet } from 'react-native';
import { APP_THEME, THEMES } from '../../constants/constants';
import colors from '../../styles/common/colors';

const layoutStyles = (themeName = APP_THEME) => StyleSheet.create({
    header: {
        height: 56,
        width: '100%',
        backgroundColor: colors.theme[themeName].primary,
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
    }
});

export default layoutStyles;