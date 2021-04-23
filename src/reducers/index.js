import { combineReducers } from 'redux';
import {
    ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FAVOURITE, 
    SET_SHOW_FAVOURITES
} from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [], 
    showFavourites: false
}
export function movies(state = initialMoviesState, action) {
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(movie => movie !== action.movie)
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state, 
                showFavourites: action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};
export function search (state = initialSearchState, action){
    return state;
}

export default combineReducers({
    movies,
    search
})