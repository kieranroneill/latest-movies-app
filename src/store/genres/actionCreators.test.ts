import {
    assert,
    SinonStub,
    stub
} from 'sinon';

// Types.
import { GenresActionTypes } from './types';

// Action creators.
import { getGenres } from './actionCreators';
import * as apiActionCreators from '../api/actionCreators';

describe('src/store/genres/actionCreators', () => {
    describe('getGenres()', () => {
        it('should create an action to get the genres', () => {
            const callApiStub: SinonStub = stub(apiActionCreators, 'callApi');

            getGenres();

            assert.calledWith(
                callApiStub,
                [
                    GenresActionTypes.GetGenresRequest,
                    GenresActionTypes.GetGenresSuccess,
                    GenresActionTypes.GetGenresError,
                ],
                '/genre/movie/list',
                'GET'
            );

            callApiStub.restore();
        });
    });
});
