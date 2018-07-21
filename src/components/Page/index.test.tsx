import { shallow } from 'enzyme';
import * as React from 'react';

// Components.
import { Page } from './';

describe('src/components/Page', () => {
    describe('<Page /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(
                shallow(
                    <Page>
                        <h1>Hello human</h1>
                    </Page>
                )
            ).toMatchSnapshot();
        });
    });
});
