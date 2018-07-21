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
import layoutReducer from './layout/reducer';

// Types.
import { GenresState } from './genres/types';
import { LayoutState } from './layout/types';

export interface ApplicationState {
    genres: GenresState;
    layout: LayoutState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    genres: genresReducer,
    layout: layoutReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(apiMiddleware())
    );
}
