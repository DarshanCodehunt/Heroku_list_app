import React from 'react';
import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import fetchStore from '../src/fetchStore';
import { Provider } from 'react-redux';
import { getStories } from '../src/api';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App.component'


delete process.env.BROWSER;

let app = express();

let port = process.env.PORT || 8080;

const webpackconfig = require('../webpack.config');
const compiler = webpack(webpackconfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true
}))

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', async (req, res) => {
    const initialState = {
        storyData: []
    };
    const stories = await getStories('F');
    console.log('TEST SERVER DATA',stories);
    initialState.storyData = stories.hits;

    const store = fetchStore(initialState);

    const srverRender = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    fs.readFile(path.resolve('public', 'index.html'), "utf-8", (err, data) => {
        if (err) {
            res.send('Something went wrong!!')
        } else {
            res.send(data.replace('<%= preloadedapp %>', srverRender));
        }

    });


});

app.listen(port, () => {
    console.log(`App started on Port number ${port}`);
})