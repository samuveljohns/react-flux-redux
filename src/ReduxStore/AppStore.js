// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware ,compose} from 'redux';

// IMPORT MIDDLEWARE

//import thunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../Reducers/AppReducer';

//import CustomMiddleware from '../../MiddleWare/CustomerMiddleware';


// CONFIGURE STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const createAppStore = () => {
    return createStore(AppReducer, composeEnhancers(applyMiddleware()));
};  