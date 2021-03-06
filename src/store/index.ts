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
import extendedMovieReducer from './extended-movie/reducer';
import filtersReducer from './filters/reducer';
import genresReducer from './genres/reducer';
import layoutReducer from './layout/reducer';
import moviesReducer from './movies/reducer';

// Types.
import { ExtendedMovieState } from './extended-movie/types';
import { FiltersState } from './filters/types';
import { GenresState } from './genres/types';
import { LayoutState } from './layout/types';
import { MoviesState } from './movies/types';

export interface ApplicationState {
    extenedMovie: ExtendedMovieState;
    filters: FiltersState;
    genres: GenresState;
    layout: LayoutState;
    movies: MoviesState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    extenedMovie: extendedMovieReducer,
    filters: filtersReducer,
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
