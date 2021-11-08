import { CHANGE_INPUT_TEXT } from "../actions/components/fields";
import { SEARCH_FOR_URL } from "../actions/modules/home"

const homeInitialState = {
    url: '',
    artistName: '',
    albumName: '',
    searchResults: []
}

export const home = (state = homeInitialState, action) => {
    switch(action.type) {
        case SEARCH_FOR_URL: {
            return Object.assign({},state, {
                url: action.url
            });
        }
        case CHANGE_INPUT_TEXT: {
            return Object.assign({}, state, {
                [action.fieldName]: action.fieldValue 
            })
        }
        default:
            return state;
    }
}