import { Reducer } from 'redux';

// Types.
import {
    GenresActions,
    GenresActionTypes,
    GenresState
} from './types';

const initialState: GenresState = {
    loading: false,
    results: [],
};

const reducer: Reducer<GenresState, GenresActions> = (state: GenresState = initialState, action: GenresActions) => {
    switch (action.type) {
        case GenresActionTypes.GetGenresError:
            return {
                ...state,
                loading: false,
            };
        case GenresActionTypes.GetGenresRequest:
            return {
                ...state,
                loading: true,
            };
        case GenresActionTypes.GetGenresSuccess:
            return {
                ...state,
                loading: false,
                results: action.payload.genres,
            };
        default:
            return state;
    }
};

export default reducer;
