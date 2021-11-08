import { SEARCH_FOR_URL } from "../../actions/modules/home"

export const searchForUrl = url => {
    return {
        type: SEARCH_FOR_URL,
        url
    }
}