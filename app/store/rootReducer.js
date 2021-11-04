import { createStore, combineReducers } from 'redux';
import { root } from './reducers/root.js';

const rootReducer = () => {
    return {
        root
    }
};

const store = createStore(combineReducers(rootReducer()));

export default store;
