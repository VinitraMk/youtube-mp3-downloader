import { CHANGE_INPUT_TEXT } from "../../actions/components/fields";
import { SEARCH_FOR_URL, SET_DETAILS } from "../../actions/modules/home"

const homeInitialState = {
    url: '',
    artistName: '',
    albumName: '',
    detailsChangedToggler: true,
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
        case SET_DETAILS: {
            return Object.assign({}, state, {
                detailsChangedToggler: !state.detailsChangedToggler
            })
        }
        default:
            return state;
    }
}