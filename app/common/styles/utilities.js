import { StyleSheet } from "react-native";

const spacer = 5;

export const margin = value => {
    return StyleSheet.create({
        margin: spacer * value
    })
}

export const marginLeft = value => {
    return StyleSheet.create({
        marginLeft: spacer * value
    })
}

export const marginRight = value => {
    return StyleSheet.create({
        marginRight: spacer * value
    })
}

export const marginTop = value => {
    return StyleSheet.create({
        marginTop: spacer * value
    })
}

export const marginBottom = value => {
    return StyleSheet.create({
        [`mb${value}`]: {
            marginBottom: spacer * value
        }
    })
}

export const marginX = value => {
    return StyleSheet.create({
        marginHorizontal: spacer * value
    })
}

export const marginY = value => {
    return StyleSheet.create({
        marginVertical: spacer * value
    })
}

export const errorText = () => {
    return StyleSheet.create({
        color: 'red'
    });
}