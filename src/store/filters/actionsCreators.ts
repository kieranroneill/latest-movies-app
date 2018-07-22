import { ActionCreator } from 'redux';

// Types.
import {
    AddGenreIdAction,
    FiltersActionTypes,
    RemoveGenreIdAction
} from './types';

export const addGenreId: ActionCreator<AddGenreIdAction> = (id: number) => ({
    id,
    type: FiltersActionTypes.AddGenreId,
});

export const removeGenreId: ActionCreator<RemoveGenreIdAction> = (id: number) => ({
    id,
    type: FiltersActionTypes.RemoveGenreId,
});
