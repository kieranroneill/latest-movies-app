import { Reducer } from 'redux';

// Types.
import {
    FiltersActions,
    FiltersActionTypes,
    FiltersState
} from './types';

const initialState: FiltersState = {
    averageRating: 3,
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
        case FiltersActionTypes.SetAverageRating:
            if (action.averageRating >= 0 && action.averageRating <= 10) {
                return {
                    ...state,
                    averageRating: action.averageRating,
                };
            }

            return state;
        default:
            return state;
    }
};

export default reducer;
