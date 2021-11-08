import React from "react";
import { FlatList, Text } from 'react-native';
import { DEFAULT_APP_THEME } from "../../common/constants/constants";
import { componentStyles } from './styles';

const List = props => {
    return (
        <FlatList
            style={componentStyles(props.theme).list}
            data={props.data}
            renderItem={({ item }) => <Text style={componentStyles(props.theme).listItem}>{item[dataLabel]}</Text>}></FlatList>
    )
}

List.defaultProps = {
    theme: DEFAULT_APP_THEME,
    data: [],
    dataLabel: '',
}

export default List;