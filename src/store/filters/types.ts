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

export type FiltersActions = AddGenreIdAction
    | RemoveGenreIdAction;
