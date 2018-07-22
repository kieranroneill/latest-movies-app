// Types.
import {
    Movie,
    MoviesActionTypes,
    MoviesErrorAction,
    MoviesRequestAction,
    MoviesState,
    MoviesSuccessAction
} from './types';

// Reducer.
import reducer from './reducer';

interface Scope {
    initialState: MoviesState;
}

describe('src/store/movies/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: {
                loading: false,
                movies: [],
                page: 0,
                totalPages: 0,
            },
        };
    });

    describe('MoviesActionTypes.GetMoviesError', () => {
        it('should stop loading and set an error message', () => {
            const action: MoviesErrorAction = {
                type: MoviesActionTypes.GetMoviesError,
            };

            scope.initialState.loading = true;

            expect(reducer(scope.initialState, action).loading).toBe(false);
        });
    });

    describe('MoviesActionTypes.GetMoviesRequest', () => {
        it('should start loading', () => {
            const action: MoviesRequestAction = {
                actionTypes: ['REQUEST', 'SUCCESS', 'ERROR'],
                method: 'GET',
                type: MoviesActionTypes.GetMoviesRequest,
                url: '/over/the/rainbow',
            };

            scope.initialState.loading = false;

            expect(reducer(scope.initialState, action).loading).toBe(true);
        });
    });

    describe('GenresActionTypes.GetGenresSuccess', () => {
        it('should stop loading and set the movies', () => {
            const results: Movie[] = [
                {
                    adult: false,
                    backdrop_path: '/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg',
                    genre_ids: [28, 12, 878],
                    id: 351286, 
                    original_language: 'en', 
                    original_title: 'Jurassic World: Fallen Kingdom', 
                    overview: 'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
                    popularity: 228.669,
                    poster_path: '/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
                    release_date: '2018-06-06',
                    title: 'Jurassic World: Fallen Kingdom',
                    video: false,
                    vote_average: 6.6,
                    vote_count: 1989,
                }
            ];
            const action: MoviesSuccessAction = {
                payload: {
                    results,
                },
                type: MoviesActionTypes.GetMoviesSuccess,
                statusCode: 200,
            };
            let state: MoviesState;

            scope.initialState.loading = true;

            state = reducer(scope.initialState, action);

            expect(state.loading).toBe(false);
            expect(state.movies).toEqual(results);
        });
    });
});

