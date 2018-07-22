import {
    assert,
    SinonStub,
    stub
} from 'sinon';

// Types.
import { MoviesActionTypes } from './types';

// Action creators.
import { getMovies } from './actionCreators';
import * as apiActionCreators from '../api/actionCreators';

describe('src/store/movies/actionCreators', () => {
    describe('getMovies()', () => {
        it('should create an action to get movies', () => {
            const callApiStub: SinonStub = stub(apiActionCreators, 'callApi');

            getMovies();

            assert.calledWith(
                callApiStub,
                [
                    MoviesActionTypes.GetMoviesRequest,
                    MoviesActionTypes.GetMoviesSuccess,
                    MoviesActionTypes.GetMoviesError,
                ],
                '/movie/now_playing',
                'GET'
            );

            callApiStub.restore();
        });
    });
});
