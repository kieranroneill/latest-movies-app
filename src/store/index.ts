import {
    applyMiddleware,
    combineReducers,
    createStore,
    Reducer,
    Store
} from 'redux';

// Middleware.
import { apiMiddleware } from './apiMiddleware';

// Reducers.
import genresReducer from './genres/reducer';

// Types.
import { GenresState } from './genres/types';

export interface ApplicationState {
    genres: GenresState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    genres: genresReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(apiMiddleware())
    );
}
