import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';
import {
    assert,
    SinonSpy,
    spy
} from 'sinon';

// Components.
import {
    FilterPanel,
    Props,
    State
} from './';
import Slider from '@material-ui/lab/Slider';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/pages/Movies/components/FilterPanel', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            addGenreId: jest.fn(),
            filters: {
                averageRating: 3,
                genreIds: [],
            },
            genres: {
                loading: false,
                results: [
                    {
                        id: 2653,
                        name: 'Violent Disney',
                    }
                ],
            },
            removeGenreId: jest.fn(),
            setAverageRating: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<FilterPanel {...props} />),
        }
    });

    describe('<FilterPanel /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });

    describe('when changing the slider', () => {
        it('should update the average rating in the redux store', () => {
            const setStateSpy: SinonSpy = spy((scope.wrapper.instance() as FilterPanel), 'setState');

            scope.wrapper
                .find(Slider)
                .simulate('change');

            assert.called(setStateSpy);
        });

        it('should update the redux store when the slider has finished dragging', () => {
            scope.wrapper
                .find(Slider)
                .simulate('dragend');

            expect(scope.props.setAverageRating).toBeCalledWith((scope.wrapper.state() as State).averageRatingValue);
        });
    });
});
