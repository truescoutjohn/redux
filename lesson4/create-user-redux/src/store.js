import { createStore } from 'redux';
import { usersReducer } from './users/users.reducers.js';

export default createStore(usersReducer);
