import { Reducer } from 'redux';

// Types.
import {
    ExtendedMovieActions,
    ExtendedMovieActionTypes,
    ExtendedMovieState
} from './types';

const initialState: ExtendedMovieState = {
    loading: false,
    result: {},
};

const reducer: Reducer<ExtendedMovieState, ExtendedMovieActions> = (state: ExtendedMovieState = initialState, action: ExtendedMovieActions) => {
    switch (action.type) {
        case ExtendedMovieActionTypes.GetExtendedMovieError:
            return {
                ...state,
                loading: false,
            };
        case ExtendedMovieActionTypes.GetExtendedMovieRequest:
            return {
                ...state,
                loading: true,
            };
        case ExtendedMovieActionTypes.GetExtendedMovieSuccess:
            return {
                ...state,
                result: action.payload,
                loading: false,
            };
        case ExtendedMovieActionTypes.ResetExtendedMovie:
            return {
                ...state,
                result: {},
            };
        default:
            return state;
    }
};

export default reducer;
