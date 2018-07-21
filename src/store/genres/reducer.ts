import { Reducer } from 'redux';

// Types.
import {
    GenresActions,
    GenresActionTypes,
    GenresState
} from './types';

const initialState: GenresState = {
    items: [],
    loading: false,
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
                items: action.payload.genres,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
