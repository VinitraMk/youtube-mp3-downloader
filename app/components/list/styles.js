import { Dimensions, StyleSheet } from 'react-native';
import { DEFAULT_APP_THEME, THEMES } from '../../common/constants/constants';
import { utilities } from '../../common/services/utilities';
import colors from '../../styles/common/colors';

export const componentStyles = (themeName = DEFAULT_APP_THEME, backgroundColor = 'transparent') => {
    return StyleSheet.create({
        list: {
            backgroundColor: backgroundColor,
            flex: 1,
            paddingRight: 30,
            paddingLeft: 20
        },
        listItem: {
            paddingTop: 20,
            paddingBottom: 10,
            borderBottomColor: colors.Grey['21212108'],
            borderBottomWidth: 1
        },
        listItemFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        mainText: {
            fontSize: 16,
            color: colors.theme[themeName].textColor
        },
        subText: {
            fontSize: 14,
            color: colors.theme[themeName].subTextColor
        }
    })
}
