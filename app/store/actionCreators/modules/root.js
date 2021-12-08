import { APP_INIT, TOGGLE_LOADER } from "../../actions/modules/root"

export const appInit = () => {
    return {
        type: APP_INIT
    }
}

export const toggleLoader = (showLoader, message) => {
    return {
        type: TOGGLE_LOADER,
        showLoader,
        message
    }
};
