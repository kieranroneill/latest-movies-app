import axios, { AxiosResponse } from 'axios';
import { Middleware } from 'redux';

// Types.
import {
    ApiActionTypes,
    CallApiAction,
    RequestAction
} from './api/types';

const apiKey: string = 'c69d299c41183849004c0aea72f832c0';
const baseUrl: string = 'https://api.themoviedb.org/3';

export function apiMiddleware(): Middleware {
    return ({ dispatch }) => {
        return (next) => async (action: CallApiAction) => {
            let requestAction: RequestAction;
            let response: AxiosResponse;

            // If it is not an API request, ignore.
            if (action.type !== ApiActionTypes.CallApi) {
                return next(action);
            }

            requestAction = action[ApiActionTypes.CallApi];

            // Dispatch an action to the reducer to notify the request has started.
            dispatch({
                type: requestAction.actionTypes[0]
            });

            try {
                response = await axios({
                    data: requestAction.body,
                    method: requestAction.method,
                    params: {
                        ...requestAction.params,
                        api_key: apiKey,
                    },
                    url: `${baseUrl}${requestAction.url}`,
                    validateStatus: (status: number) => status >= 200 && status < 400,
                });

                // Dispatch an action to the reducer to notify an success.
                dispatch({
                    type: requestAction.actionTypes[1],
                    payload: response.data,
                    statusCode: response.status,
                });
            } catch (error) {
                // Dispatch an action to the reducer to notify an error.
                dispatch({
                    type: requestAction.actionTypes[2],
                });
            }

            return next(action);
        }
    };
}
