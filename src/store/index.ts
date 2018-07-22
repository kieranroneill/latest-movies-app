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
import moviesReducer from './movies/reducer';

// Types.
import { GenresState } from './genres/types';
import { LayoutState } from './layout/types';
import { MoviesState } from './movies/types';

export interface ApplicationState {
    genres: GenresState;
    layout: LayoutState;
    movies: MoviesState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    genres: genresReducer,
    layout: layoutReducer,
    movies: moviesReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(apiMiddleware())
    );
}
