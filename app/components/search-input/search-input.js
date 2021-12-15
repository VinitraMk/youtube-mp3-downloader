import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { ButtonTypes } from '../../common/constants/typeConstants';
import { componentStyles } from './styles';
import Button from '../button/button';

const SearchInput = props => {
    const [text, setText] = useState(props.defaultValue);

    const onSearchClick = () => {
        props.onClick(text);
    }

    return (
        <SafeAreaView style={componentStyles(props.theme).searchInputWrapper}>
            {props.label !== '' && <Text style={componentStyles(props.theme, props.labelColor).searchLabel}>{props.label}</Text>}
            <TextInput
                style={componentStyles(props.theme).searchInputControl}
                placeholder={props.placeholder}
                autoFocus={true}
                defaultValue={props.defaultValue}
                value={text}
                onChangeText={setText}
            ></TextInput>
            <Button type={ButtonTypes.ICON_BUTTON} iconName="Search" addOnStyles={componentStyles(props.theme).searchButton} onClick={onSearchClick}></Button>
        </SafeAreaView>
    )
}

SearchInput.defaultProps = {
    placeholder: '',
    theme: '',
    defaultValue: '',
    value: '',
    label: '',
    labelColor: 'transparent'
}

export default SearchInput;