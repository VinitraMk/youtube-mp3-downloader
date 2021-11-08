import { DEFAULT_APP_THEME } from "../../common/constants/constants.js";
import { utilities } from '../../common/services/utilities.js';
import { APP_INIT } from '../actions/modules/root.js';

const rootInitialState = {
    theme: DEFAULT_APP_THEME
}

export const root = (state = rootInitialState, action) => {
    switch(action.type) {
        case APP_INIT:
            return Object.assign({}, state, {
                theme: DEFAULT_APP_THEME
            });
        default:
            return rootInitialState;
    }
}
