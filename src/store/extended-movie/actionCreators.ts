import {
    Action,
    ActionCreator
} from 'redux';

// Action creators.
import { callApi } from '../api/actionCreators';

// Types.
import {
    ExtendedMovieActionTypes,
    ResetExtendedMovieAction
} from './types';

export const getExtendedMovie = (id: number): Action => {
    return callApi(
        [
            ExtendedMovieActionTypes.GetExtendedMovieRequest,
            ExtendedMovieActionTypes.GetExtendedMovieSuccess,
            ExtendedMovieActionTypes.GetExtendedMovieError,
        ],
        `/movie/${id}`,
        'GET'
    );
};

export const resetExtendedMovie: ActionCreator<ResetExtendedMovieAction> = () => ({
    type: ExtendedMovieActionTypes.ResetExtendedMovie,
});
