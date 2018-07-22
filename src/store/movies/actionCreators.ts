import { Action } from 'redux';

// Action creators.
import { callApi } from '../api/actionCreators';

// Types.
import { MoviesActionTypes } from './types';

export const getMovies = (page: number = 1): Action => {
    return callApi(
        [
          MoviesActionTypes.GetMoviesRequest,
          MoviesActionTypes.GetMoviesSuccess,
          MoviesActionTypes.GetMoviesError,
        ],
        '/movie/now_playing',
        'GET',
        {
            page,
        }
    );
};
