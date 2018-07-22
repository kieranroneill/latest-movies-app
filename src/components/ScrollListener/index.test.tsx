import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Component.
import {
    Props,
    ScrollListener
} from './';

interface Scope {
    props: Props
    wrapper: ShallowWrapper;
}

describe('src/components/ScrollListener', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            onScroll: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<ScrollListener { ...props } />),
    };
    });

    describe('when the component mounts', () => {
        it('should add a "scroll" event listener to the window', () => {
            const windowAddEventListenerFn: (type: 'scroll', listener: (ev: Event) => any) => void = window.addEventListener;

            window.addEventListener = jest.fn();

            shallow(<ScrollListener {...scope.props} />);

            expect(window.addEventListener).toBeCalledWith(
                'scroll',
                scope.props.onScroll,
            );

            window.addEventListener = windowAddEventListenerFn;
        });
    });

    describe('when the component un-mounts', () => {
        it('should remove the "scroll" event listener from the window', () => {
            const windowRemoveEventListenerFn: (type: 'scroll', listener: (ev: Event) => any) => void = window.removeEventListener;

            window.removeEventListener = jest.fn();

            scope.wrapper.unmount();

            expect(window.removeEventListener).toBeCalledWith(
                'scroll',
                scope.props.onScroll,
            );

            window.removeEventListener = windowRemoveEventListenerFn;
        });
    });
});
