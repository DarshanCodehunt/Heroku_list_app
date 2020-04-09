
import axios from 'axios';
import { getStories } from './api';

export const FETCH_STORY = 'FETCH_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

export const receivedStories = data => ({
    type: FETCH_STORY,
    value: data.hits,
});

export const updateHiddenStory = data => {

    return {
        type: UPDATE_STORY,
        value: data,
    }
}



export const fetchFrontPageStories = () => {
    return dispatch => {
        getStories().then((response) => {
            dispatch(receivedStories(response))
        }).catch((err) => {
            console.log('ERROR', err)
        })
    }
}