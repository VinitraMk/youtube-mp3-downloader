import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text } from 'react-native';
import { componentStyles } from './styles';

const Input = props => {
    const styles = Object.assign({}, {
        ...componentStyles(props.theme),
        
    });
    styles.searchInputWrapper = Object.assign({}, styles.searchInputWrapper, {
        ...props.addOnStyles.wrapper
    })

    const handleOnChange = text => {
        console.log(text);
        props.onChange(props.name, text);
    }

    return (
        <SafeAreaView style={styles.searchInputWrapper}>
            {props.label !== '' && <Text style={componentStyles(props.theme, props.labelColor).searchLabel}>{props.label}</Text>}
            <TextInput
                style={styles.searchInputControl}
                placeholder={props.placeholder}
                autoFocus={true}
                defaultValue={props.defaultValue}
                value={props.value}
                onChangeText={text => handleOnChange(text)}
            ></TextInput>
        </SafeAreaView>
        
    )
}

Input.defaultProps = {
    placeholder: '',
    theme: '',
    defaultValue: '',
    value: '',
    name: '',
    labelColor: '',
    addOnStyles: {
        wrapper: null,
        label: null,
        input: null
    }
}

export default Input;