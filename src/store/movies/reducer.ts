import { Reducer } from 'redux';

// Types.
import {
    Movie,
    MoviesActions,
    MoviesActionTypes,
    MoviesState
} from './types';

const initialState: MoviesState = {
    loading: false,
    page: 0,
    results: [],
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
                results: (
                    action.payload.page > 1 ?
                        [...state.results , ...action.payload.results] : // If we are a new page, concat.
                        action.payload.results.sort((a: Movie, b: Movie) => b.popularity - a.popularity) // Sort by popularity on initial.
                ),
                loading: false,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
            };
        default:
            return state;
    }
};

export default reducer;
