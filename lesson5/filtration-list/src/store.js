import { createStore } from 'redux';
import { usersReducer } from './users/users.reducers.js';

export default createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
