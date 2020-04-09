import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Displayrow from './Displayrow';
import { fetchFrontPageStories, updateHiddenStory, fetchLastPageStories } from './App.action'



if (process.env.BROWSER) {
    require("./App.css");
}


const App = ({ dispatch, storyData }) => {
    useEffect(() => {
        dispatch(fetchFrontPageStories())

    }, [])
    const updateStory = (newVal) => {
        dispatch(updateHiddenStory(newVal))

    }

    const fetchStoriesOntype = (type) => {
        if (type === 'F') {
            dispatch(fetchFrontPageStories())
        } else if (type === 'L') {
            dispatch(fetchLastPageStories());
        }

    }
    return <div>
        <Header />
        <Displayrow fetchStoriesOntype={fetchStoriesOntype} updateStory={updateStory} storyData={storyData} />
    </div>
}

const Header = () => {
    return <div className='header-box'>
        {/* <a href='/'>Top</a> | <a href='/'>New</a> */}
    </div>
}

function mapStateToProps(state, ownProps) {
    return {
        ...state
    }

}

export default connect(mapStateToProps)(App);