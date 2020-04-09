import { FETCH_STORY, UPDATE_STORY } from './App.action';
const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STORY:
            return { ...state, storyData: action.value };
        case UPDATE_STORY:
            return { ...state, storyData: [...action.value] };
        default:
            return state;
    }
};
export default reducer;