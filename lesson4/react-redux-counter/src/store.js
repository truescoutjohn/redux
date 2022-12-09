import { createStore } from 'redux';
import { counterReducer } from './counter.reducers.js';

export default createStore(counterReducer);
