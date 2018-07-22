import { Action } from 'redux';

// ====================================================
// Action types.
// ====================================================

export enum ApiActionTypes {
    CallApi = '@api/CALL_API',
}

// ====================================================
// Actions.
// ====================================================

export interface ApiErrorAction<Type> {
    type: Type;
}

export interface ApiRequestAction<Type> extends RequestAction {
    type: Type;
}

export interface ApiSuccessAction<Type, Payload> {
    payload: Payload;
    statusCode: number;
    type: Type;
}

export interface CallApiAction extends Action {
    [ApiActionTypes.CallApi]: RequestAction,
}

export interface RequestAction {
    actionTypes: [string, string, string],
    body?: any;
    method: HttpMethod;
    params?: Params,
    url: string;
}

// ====================================================
// Types.
// ====================================================

export interface Params {
    [key: string]: string | number;
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
