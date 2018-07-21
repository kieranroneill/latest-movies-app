import { Action } from 'redux';

// Types.
import { GenresActionTypes } from './types';

// Action creators.
import { callApi } from '../api/actionCreators';

export const getGenres = (): Action => {
  return callApi(
      [
          GenresActionTypes.GetGenresRequest,
          GenresActionTypes.GetGenresSuccess,
          GenresActionTypes.GetGenresError,
      ],
      '/genre/movie/list',
      'GET'
  );
};
