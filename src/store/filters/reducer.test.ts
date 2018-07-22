// Types.
import {
    AddGenreIdAction,
    FiltersActionTypes,
    FiltersState,
    RemoveGenreIdAction,
    SetAverageRatingAction
} from './types';

// Reducer.
import reducer from './reducer';

interface Scope {
    initialState: FiltersState;
}

describe('src/store/filters/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: {
                averageRating: 10,
                genreIds: [],
            },
        };
    });

    describe('FiltersActionTypes.AddGenreId', () => {
        it('should add an id if it doesn\'t exist', () => {
            const id: number = 1;
            const action: AddGenreIdAction = {
                id,
                type: FiltersActionTypes.AddGenreId,
            };

            scope.initialState.genreIds = [];

            expect(reducer(scope.initialState, action).genreIds.length).toBe(1);
        });

        it('should not add the id if it exists', () => {
            const id: number = 1;
            const action: AddGenreIdAction = {
                id,
                type: FiltersActionTypes.AddGenreId,
            };

            scope.initialState.genreIds = [id];

            expect(reducer(scope.initialState, action).genreIds.length).toBe(1);
        });
    });

    describe('FiltersActionTypes.RemoveGenreId', () => {
        it('should remove the id if it exists', () => {
            const id: number = 1;
            const action: RemoveGenreIdAction = {
                id,
                type: FiltersActionTypes.RemoveGenreId,
            };

            scope.initialState.genreIds = [id];

            expect(reducer(scope.initialState, action).genreIds.length).toBe(0);
        });

        it('should not remove the id if it does not exist', () => {
            const id: number = 1;
            const action: RemoveGenreIdAction = {
                id,
                type: FiltersActionTypes.RemoveGenreId,
            };

            scope.initialState.genreIds = [2];

            expect(reducer(scope.initialState, action).genreIds.length).toBe(1);
        });
    });

    describe('FiltersActionTypes.SetAverageRating', () => {
        it('should not set the average rating if it is less than 0', () => {
            const averageRating: number = -1;
            const action: SetAverageRatingAction = {
                averageRating,
                type: FiltersActionTypes.SetAverageRating,
            };

            expect(reducer(scope.initialState, action).averageRating).toBe(scope.initialState.averageRating);
        });

        it('should not set the average rating if it is greater than 10', () => {
            const averageRating: number = 11;
            const action: SetAverageRatingAction = {
                averageRating,
                type: FiltersActionTypes.SetAverageRating,
            };

            expect(reducer(scope.initialState, action).averageRating).toBe(scope.initialState.averageRating);
        });

        it('should set the average rating if it is between 0 and 10', () => {
            const averageRating: number = 7;
            const action: SetAverageRatingAction = {
                averageRating,
                type: FiltersActionTypes.SetAverageRating,
            };

            scope.initialState.averageRating = 3;

            expect(reducer(scope.initialState, action).averageRating).toBe(averageRating);
        });
    });
});

