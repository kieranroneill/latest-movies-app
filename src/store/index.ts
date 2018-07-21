import {
    applyMiddleware,
    combineReducers,
    createStore,
    Reducer,
    Store
} from 'redux';
import thunk from 'redux-thunk';

export interface ApplicationState {

}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({

});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}
