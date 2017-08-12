import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';

import app from './reducers';

export default function configureStore() {
  return createStore(app, applyMiddleware(promiseMiddleware()));
}
