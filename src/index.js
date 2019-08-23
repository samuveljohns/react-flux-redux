import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    createStore, // turn the reducers into stores
    combineReducers, // combineReducers to merge all different reducer's states into one object
    compose // helps combine different functions into one
} from 'redux';
import {
    Provider
} from 'react-redux';
import AppReducer from './AppReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        items: AppReducer,
    }),
    composeEnhancers()
);
ReactDOM.render( <
        Provider store = {
            store
        } >
        <
        App / >
        <
        /Provider>, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();