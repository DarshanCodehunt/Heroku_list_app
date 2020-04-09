import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './App.reducer'

export default function (defaultState) {
    return createStore(reducer, defaultState, applyMiddleware(thunk));
}
