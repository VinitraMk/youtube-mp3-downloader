import React from "react";
import { FlatList, View } from 'react-native';
import { DEFAULT_APP_THEME } from "../../common/constants/constants";
import { componentStyles } from './styles';

const List = props => {
    return (
        <FlatList
            style={componentStyles(props.theme, props.backgroundColor).list}
            data={props.data}
            renderItem={({ item }) => <View style={componentStyles(props.theme).listItem}>{props.renderListItem(item)}</View>}></FlatList>
    )
}

List.defaultProps = {
    theme: DEFAULT_APP_THEME,
    data: [],
    dataLabel: '',
    backgroundColor: 'transparent'
}

export default List;