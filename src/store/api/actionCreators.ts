// Types.
import {
    ApiActionTypes,
    HttpMethod
} from './types';

export function callApi(
    actionTypes: [string, string, string],
    url: string,
    method: HttpMethod,
    body?: any
) {
    return {
        type: ApiActionTypes.CallApi,
        [ApiActionTypes.CallApi]: {
            body,
            method,
            actionTypes,
            url,
        },
    };
}
