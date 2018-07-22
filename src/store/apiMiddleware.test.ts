// import * as moxios from 'moxios';
// import {
//     SinonStub,
//     stub
// } from 'sinon';
//
// // Middleware.
// import { apiMiddleware } from './apiMiddleware';
//
// interface Scope {
//     dispatchStub: SinonStub;
// }
//
// describe('src/store/apiMiddleware', () => {
//     let scope: Scope;
//
//     beforeEach(() => {
//         moxios.install();
//
//         scope ={
//             dispatchStub: stub(),
//         };
//     });
//
//     afterEach(() => {
//         moxios.uninstall();
//     });
//
//     describe('apiMiddleware', () => {
//         it('should not attempt call the api if the action is not a call api action', () => {
//             apiMiddleware()(scope.dispatchStub)('y')('io');
//         });
//     });
// });
