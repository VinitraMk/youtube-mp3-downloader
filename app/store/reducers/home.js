import { SEARCH_FOR_URL } from "../actionCreators/home"

const homeInitialState = {
    url: '',
    searchResults: []
}

export const home = (state = homeInitialState, action) => {
    switch(action.type) {
        case SEARCH_FOR_URL: {
            return Object.assign({},state, {
                url: action.url
            });
        }
        default:
            return state;
    }
}