import { createStore } from 'redux';
import { toggleOption } from './options/options.reducers.js';

export default createStore(
  toggleOption,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
