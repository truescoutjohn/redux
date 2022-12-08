import { CHANGE_LANGUAGE } from './language.actions.js';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return action.payload.lang;
    }
    default: {
      return state;
    }
  }
};
