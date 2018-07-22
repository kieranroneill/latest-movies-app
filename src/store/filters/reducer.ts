import { Reducer } from 'redux';

// Types.
import {
    FiltersActions,
    FiltersActionTypes,
    FiltersState
} from './types';

const initialState: FiltersState = {
    averageRating: 10,
    genreIds: [],
};

const reducer: Reducer<FiltersState, FiltersActions> = (state: FiltersState = initialState, action: FiltersActions) => {
    let genreIds: number[];
    let index: number;

    switch (action.type) {
        case FiltersActionTypes.AddGenreId:
            genreIds = state.genreIds;

            if (genreIds.indexOf(action.id) < 0) {
                genreIds.push(action.id);
            }

            return {
                ...state,
                genreIds,
            };
        case FiltersActionTypes.RemoveGenreId:
            genreIds = state.genreIds;
            index = state.genreIds.indexOf(action.id);

            if (index > -1) {
                genreIds.splice(index, 1);
            }

            return {
                ...state,
                genreIds,
            };
        default:
            return state;
    }
};

export default reducer;
