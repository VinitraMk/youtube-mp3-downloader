import { DEFAULT_APP_THEME } from "../../../common/constants/constants.js";
import { utilities } from '../../../common/services/utilities.js';
import { APP_INIT, SET_APP_READY, TOGGLE_LOADER } from '../../actions/modules/root.js';

const rootInitialState = {
    theme: DEFAULT_APP_THEME,
    loaderDetails: {
        showLoader: false,
        message: ''
    },
    isAppReady: false
}

export const root = (state = rootInitialState, action) => {
    switch(action.type) {
        case APP_INIT:
            return Object.assign({}, state, {
                theme: DEFAULT_APP_THEME
            });
        case TOGGLE_LOADER:
            return Object.assign({}, state, {
                loaderDetails: {
                    showLoader: action.showLoader,
                    message: action.message
                }
            });
        case SET_APP_READY:
            return Object.assign({}, state, {
                isAppReady: true
            });
        default:
            return state;
    }
}
