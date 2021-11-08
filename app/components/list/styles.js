import { Dimensions, StyleSheet } from 'react-native';
import { THEMES } from '../../common/constants/constants';
import colors from '../../styles/common/colors';

export const componentStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        list: {
            backgroundColor: 'transparent'
        },
        listItem: {
            color: 'white'
        }
    })
}
