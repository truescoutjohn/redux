import { createStore, applyMiddleware, compose } from 'redux';
import { counterReducer } from './counter.reducers.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = state => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', state.getState());
  console.groupEnd();
  return result;
};

export default createStore(counterReducer, composeEnhancer(applyMiddleware(logger)));
