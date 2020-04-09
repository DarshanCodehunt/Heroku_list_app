import React from 'react';
import ReactDom from 'react-dom';
import App from './App.component';
import fetchStore from './fetchStore';
import { Provider } from 'react-redux';

const store = fetchStore({});


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('container'))

