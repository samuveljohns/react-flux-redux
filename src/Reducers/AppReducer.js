// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
import ItemReducers from './ItemReducers';

// IMPORT REDUCERS


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    items : ItemReducers
});