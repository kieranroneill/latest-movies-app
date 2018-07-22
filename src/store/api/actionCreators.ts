// Types.
import {
    ApiActionTypes,
    HttpMethod,
    Params
} from './types';

export function callApi(
    actionTypes: [string, string, string],
    url: string,
    method: HttpMethod,
    params?: Params,
    body?: any
) {
    return {
        type: ApiActionTypes.CallApi,
        [ApiActionTypes.CallApi]: {
            actionTypes,
            body,
            method,
            params,
            url,
        },
    };
}
