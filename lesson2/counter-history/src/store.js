import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const increment = () => ({ type: INCREMENT, value: 1 });
export const decrement = () => ({ type: DECREMENT, value: -1 });
export const reset = () => ({ type: RESET });

const initialState = {
  history: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
    case INCREMENT:
      return { ...state, history: [...state.history, action.value] };
    case RESET:
      return { ...state, history: [] };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
