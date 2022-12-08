import { createStore } from 'redux';
import { userReducer } from './users.reducer.js';

export default createStore(userReducer);
