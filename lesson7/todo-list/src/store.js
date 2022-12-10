import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks/tasks.reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  tasks: tasksReducer,
});

export default createStore(mainReducer, composeEnhancer(applyMiddleware(thunk)));
