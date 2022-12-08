import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';
import { userReducer } from './user.reducer';

const appReducers = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

export default createStore(appReducers);
