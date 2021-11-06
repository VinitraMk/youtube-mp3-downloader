import { SEARCH_FOR_URL } from "../actionCreators/home"

export const searchForUrl = url => {
    return {
        type: SEARCH_FOR_URL,
        url
    }
}