import { Action } from 'redux';

//====================================================
// States.
//====================================================

export interface FiltersState {
    averageRating: number;
    genreIds: number[];
}

//====================================================
// Action types.
//====================================================

export enum FiltersActionTypes {
    AddGenreId = '@filters/ADD_GENRE_ID',
    RemoveGenreId = '@filters/REMOVE_GENRE_ID',
    SetAverageRating = '@filters/SET_AVERAGE_RATING',
}

//====================================================
// Actions.
//====================================================

export interface AddGenreIdAction extends Action {
    id: number;
    type: FiltersActionTypes.AddGenreId;
}

export interface RemoveGenreIdAction extends Action {
    id: number;
    type: FiltersActionTypes.RemoveGenreId;
}

export interface SetAverageRatingAction extends Action {
    averageRating: number;
    type: FiltersActionTypes.SetAverageRating;
}

export type FiltersActions = AddGenreIdAction
    | RemoveGenreIdAction
    | SetAverageRatingAction;
