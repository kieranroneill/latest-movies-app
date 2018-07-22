// Action types.
import {
    ApiErrorAction,
    ApiRequestAction,
    ApiSuccessAction
} from '../api/types';

// ====================================================
// Action types.
// ====================================================

export enum GenresActionTypes {
    GetGenresError = '@genres/GET_GENRES_ERROR',
    GetGenresRequest = '@genres/GET_GENRES_REQUEST',
    GetGenresSuccess = '@genres/GET_GENRES_SUCCESS',
}

// ====================================================
// Actions.
// ====================================================

export type GenresErrorAction = ApiErrorAction<GenresActionTypes.GetGenresError>;

export type GenresRequestAction = ApiRequestAction<GenresActionTypes.GetGenresRequest>;

export type GenresSuccessAction = ApiSuccessAction<GenresActionTypes.GetGenresSuccess, { genres: Genre[] }>;

export type GenresActions =
  | GenresErrorAction
  | GenresRequestAction
  | GenresSuccessAction;

// ====================================================
// Responses.
// ====================================================

export interface Genre {
    id: number;
    name: string;
}

//====================================================
// States.
//====================================================

export interface GenresState {
    loading: boolean;
    results: Genre[];
}
