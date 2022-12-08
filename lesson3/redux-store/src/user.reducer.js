import { SET_USER, REMOVE_USER } from './user.actions.js';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, ...action.payload.user };
    }
    case REMOVE_USER: {
      return {};
    }
    default: {
      return state;
    }
  }
};
