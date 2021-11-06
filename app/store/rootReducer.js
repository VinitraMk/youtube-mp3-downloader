import { createStore, combineReducers } from 'redux';
import { root } from './reducers/root.js';
import { home } from './reducers/home.js';
const rootReducer = () => {
    return {
        root,
        home
    }
};

const store = createStore(combineReducers(rootReducer()));

export default store;
