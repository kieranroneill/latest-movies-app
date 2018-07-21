import { Reducer } from 'redux';

// Types.
import {
    LayoutActionTypes,
    LayoutState,
    LayoutActions,
    PageConfig
} from './types';

const initialState: LayoutState = {
    page: {
        title: 'Latest Movie Releases',
    },
};

const reducer: Reducer<LayoutState, LayoutActions> = (state: LayoutState = initialState, action: LayoutActions) => {
    let page: PageConfig;

    switch (action.type) {
        case LayoutActionTypes.SetPageTitle:
            page = initialState.page;

            page.title = action.title;

            return {
                ...state,
                page,
            };
        default:
            return state;
    }
};

export default reducer;
