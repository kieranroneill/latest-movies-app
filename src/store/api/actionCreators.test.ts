// Action creators.
import { callApi } from './actionCreators';

// Types.
import {
    ApiActionTypes,
    HttpMethod
} from './types';

describe('src/store/api/actionCreators', () => {
    describe('callApi()', () => {
        it('should create an action to call the api', () => {
            const actionTypes: [string, string, string] = [
                'REQUEST',
                'SUCCESS',
                'ERROR'
            ];
            const method: HttpMethod = 'GET';
            const url: string = 'http://element43.xyz';

            expect(callApi(
                actionTypes,
                url,
                method
            )).toEqual({
                type: ApiActionTypes.CallApi,
                [ApiActionTypes.CallApi]: {
                    actionTypes,
                    method,
                    url,
                }
            });
        });
    });
});
