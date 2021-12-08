import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { DEFAULT_APP_THEME } from "../../common/constants/constants";
import { ButtonTypes } from "../../common/constants/typeConstants";
import Icon from "../icons/icon";
import { componentStyles } from "./styles";

const Button = props => {
    const iconButtonStyles = StyleSheet.create({
        ...props.addOnStyles,
        ...componentStyles(props.theme).iconButton
    });

    if (props.type === ButtonTypes.ICON_BUTTON) {
        return (
            <TouchableHighlight onPress={props.onClick} style={iconButtonStyles} activeOpacity={0.8}>
                <View>
                    <Icon iconName={props.iconName}></Icon>
                </View>
            </TouchableHighlight>
        )
    }
    return (
        <TouchableHighlight onPress={props.onClick} style={componentStyles(props.theme).button} activeOpacity={0.6}>
            <View>
                <Text style={componentStyles(props.theme).buttonText}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}

Button.defaultProps = {
    theme: DEFAULT_APP_THEME,
    text: '',
    type: ButtonTypes.DEFAULT,
    iconName: '',
    iconColor: '',
    addOnStyles: {}
}

export default Button;