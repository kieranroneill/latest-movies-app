import { Action } from 'redux';

// Action types.
import {
    ApiErrorAction,
    ApiRequestAction,
    ApiSuccessAction
} from '../api/types';

// Types.
import { Genre } from '../genres/types';

// ====================================================
// Action types.
// ====================================================

export enum ExtendedMovieActionTypes {
    GetExtendedMovieError = '@extended-movie/GET_EXTENDED_MOVIE_ERROR',
    GetExtendedMovieRequest = '@extended-movie/GET_EXTENDED_MOVIE_REQUEST',
    GetExtendedMovieSuccess = '@extended-movies/GET_EXTENDED_MOVIE_SUCCESS',
    ResetExtendedMovie = '@extended-movies/RESET_EXTENDED_MOVIE',
}

// ====================================================
// Actions.
// ====================================================

export type ExtendedMovieErrorAction = ApiErrorAction<ExtendedMovieActionTypes.GetExtendedMovieError>;

export type ExtendedMovieRequestAction = ApiRequestAction<ExtendedMovieActionTypes.GetExtendedMovieRequest>;

export type ExtendedMovieSuccessAction = ApiSuccessAction<ExtendedMovieActionTypes.GetExtendedMovieSuccess, ExtendedMovie>;

export interface ResetExtendedMovieAction extends Action {
    type: ExtendedMovieActionTypes.ResetExtendedMovie;
}

export type ExtendedMovieActions = ExtendedMovieErrorAction
    | ExtendedMovieRequestAction
    | ExtendedMovieSuccessAction
    | ResetExtendedMovieAction;

// ====================================================
// Responses.
// ====================================================

export interface ExtendedMovie {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: null;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguages[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    iso_639_1: string;
    name: string;
}

//====================================================
// States.
//====================================================

export interface ExtendedMovieState {
    loading: boolean;
    result: ExtendedMovie;
}
