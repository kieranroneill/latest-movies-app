// Action types.
import {
    ApiErrorAction,
    ApiRequestAction,
    ApiSuccessAction
} from '../api/types';

// ====================================================
// Action types.
// ====================================================

export enum MoviesActionTypes {
    GetMoviesError = '@movies/GET_MOVIES_ERROR',
    GetMoviesRequest = '@movies/GET_MOVIES_REQUEST',
    GetMoviesSuccess = '@movies/GET_MOVIES_SUCCESS',
}

// ====================================================
// Actions.
// ====================================================

export type MoviesErrorAction = ApiErrorAction<MoviesActionTypes.GetMoviesError>;

export type MoviesRequestAction = ApiRequestAction<MoviesActionTypes.GetMoviesRequest>;

export type MoviesSuccessAction = ApiSuccessAction<MoviesActionTypes.GetMoviesSuccess, {
    page: number,
    results: Movie[],
    total_pages: number,
}>;

export type MoviesActions =
  | MoviesErrorAction
  | MoviesRequestAction
  | MoviesSuccessAction;

// ====================================================
// Responses.
// ====================================================

export interface Movie {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

//====================================================
// States.
//====================================================

export interface MoviesState {
    loading: boolean;
    page: number;
    results: Movie[];
    totalPages: number;
}
