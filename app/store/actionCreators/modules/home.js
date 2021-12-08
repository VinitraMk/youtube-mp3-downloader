import { SEARCH_FOR_URL, SET_DETAILS } from "../../actions/modules/home"

export const searchForUrl = url => {
    return {
        type: SEARCH_FOR_URL,
        url
    }
}

export const setDetails = () => {
    return {
        type: SET_DETAILS
    }
}