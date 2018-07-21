import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { assert, stub, SinonStub } from 'sinon';

// Components.
import App from './App';

// Module.
import { onDOMContentLoaded } from './index';

interface Scope {
    createElementStub: SinonStub;
    renderStub: SinonStub;
}

describe('index', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            createElementStub: stub(React, 'createElement'),
            renderStub: stub(ReactDOM, 'render'),
        };
    });

    afterEach(() => {
        scope.createElementStub.restore();
        scope.renderStub.restore();
    });

    describe('onDOMContentLoaded()', () => {
        it('should not render the <App/> component if the "#root" element does not exist', () => {
            const getElementByIdStub: SinonStub = stub(document, 'getElementById');

            getElementByIdStub.returns(null);

            onDOMContentLoaded();

            assert.notCalled(scope.createElementStub);
            assert.notCalled(scope.renderStub);

            getElementByIdStub.restore();
        });

        it('should render the <App/> component if the "#root" element exists', () => {
            onDOMContentLoaded();

            assert.calledWith(scope.createElementStub, App);
            assert.calledOnce(scope.renderStub);
        });
    });
});
