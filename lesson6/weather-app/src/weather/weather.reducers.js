import { SET_CITIES } from './weather.actions.js';

export const weatherReducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return { ...state, cities: action.payload.cities };
    }
    default:
      return state;
  }
};
