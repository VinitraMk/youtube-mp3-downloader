import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text } from 'react-native';
import { componentStyles } from './styles';

const Input = props => {
    return (
        <SafeAreaView style={componentStyles(props.theme).searchInputWrapper}>
            {props.label !== '' && <Text style={componentStyles(props.theme, props.labelColor).searchLabel}>{props.label}</Text>}
            <TextInput
                style={componentStyles(props.theme).searchInputControl}
                placeholder={props.placeholder}
                autoFocus={true}
                defaultValue={props.defaultValue}
                value={props.value}
                onChangeText={props.onChange}
            ></TextInput>
        </SafeAreaView>
        
    )
}

Input.defaultProps = {
    placeholder: '',
    theme: '',
    defaultValue: '',
    value: '',
    labelColor: ''
}

export default Input;