// Types.
import {
    LayoutActionTypes,
    LayoutState,
    SetPageTitleAction
} from './types';

// Reducer.
import reducer from './reducer';

interface Scope {
    initialState: LayoutState;
}

describe('src/store/layout/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: {
                page: {
                    title: '99!',
                },
            },
        };
    });

    describe('LayoutActionTypes.SetPageTitle', () => {
        it('should set the title', () => {
            const title: string = 'Element 43';
            const action: SetPageTitleAction = {
                title,
                type: LayoutActionTypes.SetPageTitle,
            };

            expect(reducer(scope.initialState, action).page.title).toBe(title);
        });
    });
});

