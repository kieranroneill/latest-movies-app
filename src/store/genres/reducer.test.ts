// Types.
import {
    Genre,
    GenresActionTypes,
    GenresErrorAction,
    GenresRequestAction,
    GenresState,
    GenresSuccessAction
} from './types';

// Reducer.
import reducer from './reducer';

interface Scope {
    initialState: GenresState;
}

describe('src/store/genres/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: {
                items: [],
                loading: false,
            },
        };
    });

    describe('GenresActionTypes.GetGenresError', () => {
        it('should stop loading and set an error message', () => {
            const action: GenresErrorAction = {
                type: GenresActionTypes.GetGenresError,
            };

            scope.initialState.loading = true;

            expect(reducer(scope.initialState, action).loading).toBe(false);
        });
    });

    describe('GenresActionTypes.GetGenresRequest', () => {
        it('should start loading', () => {
            const action: GenresRequestAction = {
                actionTypes: ['REQUEST', 'SUCCESS', 'ERROR'],
                method: 'GET',
                type: GenresActionTypes.GetGenresRequest,
                url: '/over/the/rainbow',
            };

            scope.initialState.loading = false;

            expect(reducer(scope.initialState, action).loading).toBe(true);
        });
    });

    describe('GenresActionTypes.GetGenresSuccess', () => {
        it('should stop loading and set the genres', () => {
            const genres: Genre[] = [
                {
                    id: 1234,
                    name: 'Anime',
                }
            ];
            const action: GenresSuccessAction = {
                payload: {
                    genres,
                },
                type: GenresActionTypes.GetGenresSuccess,
                statusCode: 200,
            };
            let state: GenresState;

            scope.initialState.loading = true;

            state = reducer(scope.initialState, action);

            expect(state.loading).toBe(false);
            expect(state.items).toEqual(genres);
        });
    });
});

