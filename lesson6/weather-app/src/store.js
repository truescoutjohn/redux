import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { weatherReducer } from './weather/weather.reducers.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(weatherReducer, composeEnhancer(applyMiddleware(thunk)));
