import {
    assert,
    SinonStub,
    stub
} from 'sinon';

// Types.
import { ExtendedMovieActionTypes } from './types';

// Action creators.
import {
    getExtendedMovie,
    resetExtendedMovie
} from './actionCreators';
import * as apiActionCreators from '../api/actionCreators';

describe('src/store/extended-movie/actionCreators', () => {
    describe('getMovie()', () => {
        it('should create an action to get a movie', () => {
            const callApiStub: SinonStub = stub(apiActionCreators, 'callApi');
            const id: number = 123;

            getExtendedMovie(id);

            assert.calledWith(
                callApiStub,
                [
                    ExtendedMovieActionTypes.GetExtendedMovieRequest,
                    ExtendedMovieActionTypes.GetExtendedMovieSuccess,
                    ExtendedMovieActionTypes.GetExtendedMovieError,
                ],
                `/movie/${id}`,
                'GET'
            );

            callApiStub.restore();
        });
    });

    describe('resetExtendedMovie()', () => {
        it('should create an action to reset the movie', () => {
            expect(resetExtendedMovie()).toEqual({
                type: ExtendedMovieActionTypes.ResetExtendedMovie,
            });
        });
    });
});
