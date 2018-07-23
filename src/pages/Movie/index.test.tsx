import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';

// Components.
import {
    Movie,
    Props
} from './';

// Mocks.
import { MockRouteComponentProps } from '../../../test/mocks/reactRouterMock';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/pages/Movie', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            extendedMovie: {
                loading: false,
                result: {},
            },
            getExtendedMovie: jest.fn(),
            resetExtendedMovie: jest.fn(),
            setPageTitle: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<Movie {...props} {...new MockRouteComponentProps()} />),
        }
    });

    describe('<Movie /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });

    describe('when the component mounts', () => {
        it('should send a request to get the extended movie details', () => {
            expect(scope.props.getExtendedMovie).toBeCalled();
        });
    });

    describe('when the component unmounts', () => {
        it('should reset the extended movie details', () => {
            scope.wrapper.unmount();

            expect(scope.props.resetExtendedMovie).toBeCalled();
        });
    });
});
