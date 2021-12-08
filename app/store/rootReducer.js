import { createStore, combineReducers } from 'redux';
import { root } from './reducers/modules/root.js';
import { home } from './reducers/modules/home.js';
const rootReducer = () => {
    return {
        root,
        home
    }
};

const store = createStore(combineReducers(rootReducer()));

export default store;
