import { StyleSheet } from "react-native";
import { DEFAULT_APP_THEME, THEMES } from "../../common/constants/constants";
import colors from "../../styles/common/colors";

const pageStyles = (themeName = DEFAULT_APP_THEME) => {
    return StyleSheet.create({
        searchFormSection: {
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: 50,
            height: 125,
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].lightSecondary : colors.theme[themeName].primary,
            shadowColor: 'rgba(0,0,0,0.25)',
            shadowOffset: { width: 0, height: 4},
            shadowRadius: 2,
            elevation: 4 
        },
        searchResultsSection: {
            backgroundColor: themeName === THEMES.LIGHT ? colors.theme[themeName].light : colors.theme[themeName].primaryDark,
            paddingLeft: 20,
            paddingRight: 30,
            paddingTop: 30,
            maxHeight: 290,
            width: '100%'
        }
    })
}

export default pageStyles;