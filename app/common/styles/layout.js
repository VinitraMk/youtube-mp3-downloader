import { StyleSheet } from 'react-native';
import { FLEX_GRID_COLS, FLEX_GRID_ONE_COL } from '../constants/constants';
import { FLEX_DIRECTION } from '../constants/typeConstants';

export const row = () => StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    rowReverse: {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%'
    }
})

export const column = (col = 0) => {
    const width = `${parseInt(((col / FLEX_GRID_COLS) * 100), 10)}%`;
    return StyleSheet.create({
        column: {
            display: 'flex',
            width: width,
            maxWidth: width,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto'
        }
    })
}