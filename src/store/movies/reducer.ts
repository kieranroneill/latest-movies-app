import { Reducer } from 'redux';

// Types.
import {
    MoviesActions,
    MoviesActionTypes,
    MoviesState
} from './types';

const initialState: MoviesState = {
    loading: false,
    movies: [],
    page: 0,
    totalPages: 0,
};

const reducer: Reducer<MoviesState, MoviesActions> = (state: MoviesState = initialState, action: MoviesActions) => {
    switch (action.type) {
        case MoviesActionTypes.GetMoviesError:
            return {
                ...state,
                loading: false,
            };
        case MoviesActionTypes.GetMoviesRequest:
            return {
                ...state,
                loading: true,
            };
        case MoviesActionTypes.GetMoviesSuccess:
            return {
                ...state,
                movies: action.payload.results,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
