/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import allReducers from '../reducers/index';

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
