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
                page: 0,
                results: [],
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

    describe('MoviesActionTypes.GetMoviesSuccess', () => {
        it('should stop loading and set the movies', () => {
            const page: number = 1;
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
            const total_pages: number = 14;
            const action: MoviesSuccessAction = {
                payload: {
                    page,
                    results,
                    total_pages,
                },
                type: MoviesActionTypes.GetMoviesSuccess,
                statusCode: 200,
            };
            let state: MoviesState;

            scope.initialState.loading = true;

            state = reducer(scope.initialState, action);

            expect(state.loading).toBe(false);
            expect(state.page).toEqual(page);
            expect(state.results).toEqual(results);
            expect(state.totalPages).toEqual(total_pages);
        });

        it('should append the movies to the existing movies', () => {
            const page: number = 2;
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
            const total_pages: number = 14;
            const action: MoviesSuccessAction = {
                payload: {
                    page,
                    results,
                    total_pages,
                },
                type: MoviesActionTypes.GetMoviesSuccess,
                statusCode: 200,
            };
            let state: MoviesState;

            scope.initialState.loading = true;
            scope.initialState.results = [
                {
                    adult: false,
                    backdrop_path: '/kEqeponciiz6TyuKWtnKSzXzbGa.jpg',
                    genre_ids: [16, 80, 9648, 28, 18],
                    id: 493006,
                    original_language: 'ja',
                    original_title: '名探偵コナン ゼロの執行人',
                    overview: 'There is a sudden explosion at Tokyo Summit\'s giant Edge of Ocean facility. The shadow of Tōru Amuro, who works for the National Police Agency Security Bureau as Zero, appears at the site. In addition, the \'triple-face\' character is known as Rei Furuya as a detective and Kogorō Mōri\'s apprentice, and he is also known as Bourbon as a Black Organization member. Kogorō is arrested as a suspect in the case of the explosion. Conan conducts an investigation to prove Kogorō\'s innocence, but Amuro gets in his way.',
                    popularity: 63.691,
                    poster_path: '/mMWV5MXn2pkDnnI4vWpy3dRWdNC.jpg',
                    release_date: '2018-04-13',
                    title: 'Detective Conan: Zero the Enforcer',
                    video: false,
                    vote_average: 4.4,
                    vote_count: 9,
                }
            ];

            state = reducer(scope.initialState, action);

            expect(state.loading).toBe(false);
            expect(state.page).toEqual(page);
            expect(state.results.length).toBe(2);
            expect(state.totalPages).toEqual(total_pages);
        });
    });
});

