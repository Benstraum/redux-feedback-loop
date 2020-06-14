import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'

const feedbackReducer = (state = { feeling: '', understanding: '', support: '', comment: '' }, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            if (action.payload > 10) {
                state.feeling = 10
            } else if (action.payload < 1) {
                state.feeling = 1
            } else {
                state.feeling = action.payload
            }
            return state
        case 'SET_UNDERSTANDING':
            if (action.payload > 10) {
                state.understanding = 10
            } else if (action.payload < 1) {
                state.understanding = 1
            } else {
                state.understanding = action.payload
            }
            return state
        case 'SET_SUPPORT':
            if (action.payload > 10) {
                state.support = 10
            } else if (action.payload < 1) {
                state.support = 1
            } else {
                state.support = action.payload
            }
            return state
        case 'SET_COMMENT':
            state.comment = action.payload
            return state
        case 'RESET':
            state = { feeling: '', understanding: '', support: '', comment: '' }
            return state
        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
