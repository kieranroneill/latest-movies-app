// Types.
import { FiltersActionTypes } from './types';

// Action creators.
import {
    addGenreId,
    removeGenreId,
    setAverageRating
} from './actionsCreators';

describe('src/store/filters/actionsCreators', () => {
    describe('addGenreId()', () => {
        it('should create an action to add a genre id', () => {
            const id: number = 123;

            expect(addGenreId(id)).toEqual({
                id,
                type: FiltersActionTypes.AddGenreId,
            });
        });
    });

    describe('removeGenreId()', () => {
        it('should create an action to remove a genre id', () => {
            const id: number = 123;

            expect(removeGenreId(id)).toEqual({
                id,
                type: FiltersActionTypes.RemoveGenreId,
            });
        });
    });

    describe('setAverageRating()', () => {
        it('should create an action to remove a genre id', () => {
            const averageRating: number = 6;

            expect(setAverageRating(averageRating)).toEqual({
                averageRating,
                type: FiltersActionTypes.SetAverageRating,
            });
        });
    });
});
