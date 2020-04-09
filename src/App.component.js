import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Displayrow from './Displayrow';
import { fetchFrontPageStories, updateHiddenStory } from './App.action'



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
    return <div>
        <Header />
        <Displayrow updateStory={updateStory} storyData={storyData} />
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