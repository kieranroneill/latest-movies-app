import { Action } from 'redux';

// Types.
import { MoviesActionTypes } from './types';

// Action creators.
import { callApi } from '../api/actionCreators';

export const getMovies = (): Action => {
  return callApi(
      [
          MoviesActionTypes.GetMoviesRequest,
          MoviesActionTypes.GetMoviesSuccess,
          MoviesActionTypes.GetMoviesError,
      ],
      '/movie/now_playing',
      'GET'
  );
};
