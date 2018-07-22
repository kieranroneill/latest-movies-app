import { shallow } from 'enzyme';
import * as React from 'react';

// Components.
import {
    Header,
    Props
} from './';

describe('src/components/Header', () => {
    describe('<Header /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            const props: Props = {
                layout: {
                    page: {
                        title: 'Some catchy title'
                    }
                }
            };

            expect(
                shallow(
                    <Header {...props} />
                )
            ).toMatchSnapshot();
        });
    });
});
