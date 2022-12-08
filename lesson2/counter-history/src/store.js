import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

const initialState = {
  history: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, history: [...state.history, -1] };
    case INCREMENT:
      return { ...state, history: [...state.history, 1] };
    case RESET:
      return { ...state, history: [] };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
